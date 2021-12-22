<template>
    <div class="">
        <div class="q-pa-sm flex" style="position: relative;">
            <h3 class="q-ma-none q-mb-sm q-mr-auto">Календарь событий</h3>
            <q-btn :icon="'add'" outline color="primary" @click="addEditModalType = 'add', isAddEditModalOpened = true"/>
        </div>
        <div >
            <FullCalendar :options="calendarOptions" />
        </div>
        <AddEditModal
            :isOpened="this.isAddEditModalOpened"
            :actionType="this.addEditModalType"
            :dataType="'task'"
            @closeModal="isAddEditModalOpened = false"
        />
    </div>
</template>

<script>
    import AddEditModal from 'src/components/modals/AddEditModal'
    import FullCalendar from '@fullcalendar/vue'
    import dayGridPlugin from '@fullcalendar/daygrid'
    import timeGridPlugin from '@fullcalendar/timegrid'
    import listPlugin from '@fullcalendar/list';
    import interactionPlugin from '@fullcalendar/interaction'
    import ruLocale from '@fullcalendar/core/locales/ru';

    import { INITIAL_EVENTS, createEventId } from 'src/tempData/event-utils'

    export default {

    name: 'Calendar',
      components: {
        FullCalendar, // make the <FullCalendar> tag available
        AddEditModal    
      },

      data() {
        return {
          isAddEditModalOpened: false,
          addEditModalType: '',

          calendarOptions: {
            plugins: [ dayGridPlugin, timeGridPlugin,  interactionPlugin, listPlugin ],

            headerToolbar: {
              left: 'prev,next today',
              center: 'title',
              right: 'listWeek,timeGridDay,timeGridWeek,dayGridMonth'
            },

            slotLabelFormat: {
                hour: 'numeric',
                minute: '2-digit',
                omitZeroMinute: false,
                meridiem: 'short'
            },

            eventTimeFormat: { // '14:30'
                hour: '2-digit',
                minute: '2-digit',
                meridiem: false
            },

            initialView: 'dayGridMonth',
            initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed

            slotDuration: '00:15:00',
            locale: ruLocale,
            editable: true,   // перемещение события по календарю
            selectable: false, // создание нового события при клике на день календаря
            eventMinHeight: 30, // мин. высота события
            scrollTime: '08:00:00', // с какого времени показывать календарь
            displayEventEnd: true, // показывать окончание события
            displayEventTime: true, // показывать время события
            stickyHeaderDates: true,

            eventClassNames: function(arg) {
                if (arg.event.extendedProps.eventType === 'meeting') {
                    return [ 'meeting-event' ]
                }
            },
            
            eventDisplay: 'list',
            eventMaxStack: 10, // макс кол-во событий
            nowIndicator: true, // индикатор текущего времени

            moreLinkClassNames: 'fc-crm-more-link', // класс для количества событий

            moreLinkContent: function(arg) { // показ количества событий
                let eventCount = document.createElement('i')

                if (arg.num > 0) {
                    eventCount.innerHTML = arg.num
                }

                return { domNodes: [eventCount] }
            },

            slotEventOverlap: true,

            contentHeight: 500, // высота контента календаря
            
            selectMirror: true,
            dayMaxEvents: false,
            weekends: true,
            allDaySlot: true, // показывать ячейку событий на целый день
            
            select: this.handleDateSelect,
            eventClick: this.handleEventClick,
            eventsSet: this.handleEvents,

            eventChange: this.handleEventChange,
            eventAdd: this.handleEventAdd
            /* you can update a remote database when these fire:
            eventAdd:
            eventChange:
            eventRemove:
            */
          },
          currentEvents: []
        }
      },

      methods: {
        handleEventAdd(arg) {
            console.log('add', arg)
        },

        handleEventChange(arg) {
            console.log('change',arg)
        },

        handleWeekendsToggle() {
            this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
        },
        handleDateSelect(selectInfo) {
            let title = prompt('Please enter a new title for your event')
            let calendarApi = selectInfo.view.calendar
            calendarApi.unselect() // clear date selection

            if (title) {
                calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
                })
            }
        },
        handleEventClick(clickInfo) {
            this.addEditModalType = 'edit'
            this.isAddEditModalOpened = true
        },
        handleEvents(events) {
            this.currentEvents = events
        }
      }
    }
</script>

<style lang='scss'>
        .fc {
            max-width: 100% !important;
        }

        .fc-header-toolbar {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 0 !important;

            .fc-toolbar-title {
                font-weight: 600;
                font-size: 16px;
                line-height: 19px;
                display: flex;
                align-items: center;
                padding-right: 70px;
                
                @media(max-width: 480px) {
					padding-right: 0;
				}

                color: $primary;
            }

            .fc-toolbar-chunk:first-child {
                padding: 15px 20px;

				@media(max-width: 480px) {
					padding: 10px;
					padding-right: 0;
				}
                
                .fc-button-group {
                    .fc-prev-button,
                    .fc-next-button {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 44px;
                        height: 44px;
                        background: #ffffff;
                        border: 1px solid $info;
                        box-sizing: border-box;
                        border-radius: 12px;
                        
                        color: $primary;
                    }

                    .fc-prev-button {
                        margin-right: 10px;
                    }

                    .fc-next-button {
                        margin-right: 20px;
                    }

                    .fc-today-button {
                        border: 0;
                        background-color: $primary;
                        font-weight: 600;
                        font-size: 36px;
                        line-height: 19px;
                        display: flex;
                        align-items: center;

                        color: $primary;
                    }
                }
            }

            .fc-toolbar-chunk:nth-child(2) {
                flex-grow: 1;
				padding: 0 10px;

				.fc-toolbar-title {
					font-size: 16px;
					line-height: 19px;
					justify-content: center;
				}

                @media(max-width: 480px) {
					width: 100%;
				}
            }

            .fc-toolbar-chunk:last-child {
                width: 100%;
                padding: 10px;
                border-top: 1px solid $info;

                .fc-button-group {
                    width: 100%;

                    .fc-button {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 0;
                        background-color: transparent;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 18px;
                        line-height: 22px;
                        display: flex;
                        align-items: center;

                        color: $primary;

                        &-active {
                            color: $secondary;
                        }

                        @media(max-width: 480px) {
                            font-size: 14px;
                            line-height: 17px;
                        }
                    }
                }
            }
        }

        .fc-list {
            border: 0 !important;
        }

        .fc-list-day-cushion {
            padding: 10px 20px !important;
            background-color: transparent !important;

            .fc-list-day-text {
                display: none;
            }

            .fc-list-day-side-text {
                font-weight: 400;
                float: left;
                font-size: 14px;
                line-height: 17px;
                display: flex;
                align-items: center;

                color: $primary;
            }
        }

        .fc-list-event {
            display: flex;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid $info;

            td {
                border: 0 !important;
                padding: 0 !important;

                b {
                    display: none;
                }

                
                @media(max-width: 480px) {
                    i {
                        font-size: 14px;
                        line-height: 17px;
                    }
                }
            }

            &-time {
                min-width: 90px !important;
                font-weight: 600;
                font-size: 16px;
                line-height: 19px;
                margin-right: 20px;
    
                color: $primary;
            }

            @media(max-width: 480px) {
                padding: 10px;
            }
        }

        .fc-list-event-graphic {
            display: flex;
            min-width: 16px !important;
            min-height: 16px !important;
            margin-right: 20px;
        }

        .fc-list-event-dot {
            border-radius: 50% !important;
            min-width: 14px !important;
            min-height: 14px !important;
            background: rgba(76, 175, 80, 0.4);
            border: 2px solid #4CAF50 !important;
        }

        .fc-list-event-data i {
            font-size: 16px;
            line-height: 22px;
            
            color: $secondary;
        }

        .fc-list-event-title i{
            font-style: normal !important;
        }

        .fc-col-header {
            background-color: #F2F2F2;

            .fc-day {
                a { 
                    display: flex;
                    align-items: center;
                    min-height: 40px;
                    width: 100%;
                    padding-left: 10px;
                    font-size: 14px;
                    line-height: 17px;

                    color: $primary;
                }
            }
        }

        .fc-daygrid-day-number {
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            width: 100%;
            padding-left: 10px;
            color: $primary;
        }

        .fc-day-sun {
            .fc-daygrid-day-number {
                color: $red-4;
            }
        }

        .fc-daygrid-day-frame {
            background-color: #ffffff;
        }

        .fc-timegrid-event,
        .fc-daygrid-event {
            overflow: hidden;
            overflow-y: auto;
            background-color: $info;
        }

        .fc-timegrid-event::-webkit-scrollbar,
        .fc-daygrid-event::-webkit-scrollbar {
            width: 3px;
            height: 3px;
            background-color: #f2f2f2;
            border-radius: 0;
        }
        
        .fc-timegrid-event::-webkit-scrollbar-thumb,
        .fc-daygrid-event::-webkit-scrollbar-thumb {
            background: $info;
            border-radius: 0;
        }

        .fc-timegrid-event {
            border-top: 0;
            border-right: 0;
            border-bottom: 0;
            border-width: 5px;
            background-color: $primary;
            border-color: $positive !important;

            &.meeting-event {
                border-color: $purple-6 !important;
            }

            .fc-event-main > span > span {
                
                display: flex;
                flex-direction: column;
                b {
                    font-size: 14px;
                    line-height: 17px;
                    color: $primary;
                }

                i {
                    font-size: 12px;
                    line-height: 17px;
                    font-style: normal;
                    color: $primary;
                }
            }
        }

        .fc-timeGridWeek-view  {
            width: 100%;
            overflow: scroll hidden;

            .fc-scrollgrid {
                min-width: 1340px;
            }
        }

        .fc-view-harness {
            background-color: #ffffff !important;
        }

    
    .fc-day-today {
        background-color: #ffffff !important;
    }

    .fc-timegrid-event-harness {
        margin: 3px;
    }

    .fc-timegrid-body tr {
        height: 30px;

        .fc-timegrid-slot-label-frame {
            text-align: center;
        }
    }

    .fc-scrollgrid-section-header .fc-scrollgrid-sync-inner {
        background-color: #f2f2f2;
    }

    .fc-col-header-cell-cushion {
        justify-content: center;
        font-size: 14px;
        line-height: 17px;
        font-weight: 400;
        text-transform: capitalize;

        color: $warning;
    }

    .fc-timegrid-now-indicator-arrow {
        border-color: $positive !important;
        border-top-color: transparent !important;
        border-bottom-color: transparent !important;
    }

    .fc-timegrid-now-indicator-line {
        border-color: $positive !important;
    }

    .fc-daygrid-day-events {
        bottom: 3px !important;
    }

    .fc-daygrid-event-dot {
        border-color: $positive;
    }

    .fc-daygrid-more-link {
        left: calc(100% - 30px) !important;
    }

    .fc-timegrid-more-link.fc-crm-more-link {
        width: 35px;
        height: 35px;
    }

    .fc-crm-more-link {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        line-height: 14px;
        width: 22px;
        height: 22px;
        border-radius: 8px 8px 0px 8px;

        background-color: $deep-purple-11;
        color: #ffffff;
    }

    .fc-dayGridMonth-view, .fc-timeGridWeek-view {
        padding: 0;
    }

    a {
        cursor: pointer;
    }

    .fc-scroller::-webkit-scrollbar,
    .fc-timegrid::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background-color: #f2f2f2;
        border-radius: 0;
      }
      
      .fc-scroller::-webkit-scrollbar-thumb,
      .fc-timegrid::-webkit-scrollbar-thumb {
        background: $primary;
        border-radius: 0;
      }
</style>