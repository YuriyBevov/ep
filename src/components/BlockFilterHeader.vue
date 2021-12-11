<template>
    <div>
        <div
            v-if="  this.$props.activeTab !== 'tree'                && 
                    this.$props.activeTab !== 'user-group'          && 
                    this.$props.dataType  !== 'user-info'           && 
                    this.$props.dataType  !== 'task-info'           &&
                    this.$props.dataType  !== 'project-info'        &&
                    this.$props.dataType  !== 'projectGroup-info'   &&
                    this.$props.dataType  !== 'main'
            "
            class="flex no-wrap align-center row"
        >
            <q-btn
                outline 
                color="primary q-mr-sm" 
                icon="add"
                @click="$emit('openAddEditModal')"
            />

            <div class="flex no-wrap align-center row">
                <q-btn
                    outline 
                    color="primary q-mr-sm" 
                    icon="dashboard"
                    @click="$emit('changeViewMode', 'card')"
                />

                <q-btn
                    outline 
                    color="primary q-mr-sm" 
                    icon="view_list"
                    @click="$emit('changeViewMode', 'table')"
                />
            </div>

            <!--В отдельный компонент поиска-->
            <q-input
                square 
                outlined
                v-model="search" 
                type="search" 
                placeholder="Поиск"
                class="search"
                style="flex-grow: 1;"
                @input="emitSearchText"
            >
                <template v-slot:append>
                    <q-icon name="search" v-if="!search.length"/>
                    <q-btn
                        v-else
                        flat
                        @click="resetSearchField()"
                    >
                        <q-icon name="close"/>
                    </q-btn>
                </template>
            </q-input>

            <!--В отдельный компонент селекта-->
            <q-select
                class="col-4 q-pl-sm" 
                v-if="this.$props.dataType === 'task'"
                square outlined 
                v-model="taskRole" 
                :options="['Все', 'Те, в которых являюсь отв-м', 'Те, в которых являюсь исп-м', 'Те, в которых являюсь уч-ком']" 
                label="Показывать: " 
            />

            <q-select
                class="col-4 q-pl-sm" 
                v-if="this.$props.dataType === 'project'"
                square outlined 
                v-model="projectRole" 
                :options="['Все', 'Те, в которых являюсь создателем']" 
                label="Показывать: " 
            />
            
        </div>
    </div>
</template>

<script>
    export default {

        methods: {
            resetSearchField() {
                this.search = ''
            }
        },

        data() {
            return {
                search: '',
                taskRole: 'Все',
                projectRole: 'Все'
            }
        },

        methods: {
            emitSearchText() {
                this.$emit('filter', {
                    searchText: this.search
                })
            }
        },

        props: { 
            activeTab: { type: String },
            dataType: { type: String },
            viewMode: { type: String}
        }
    }
</script>