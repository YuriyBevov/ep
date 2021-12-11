<template>
    <div>
      <q-table
          class="my-sticky-header-column-table"
          :data="this.$props.data"
          :columns="this.$props.columns"
          row-key="_id"
          :no-data-label="'Нет данных для отображения...'"
          :rows-per-page-options="[5, 10, 25, 50, 100, 500]"
          :rows-per-page-label="'Показывать на странице:'"
          :pagination-label="(firstRowIndex, endRowIndex, totalRowsNumber) => firstRowIndex + ' - ' + endRowIndex + ' из ' + totalRowsNumber"
          @row-click="openItemModal"
      />
      
      <ItemModal
          :isOpened="this.isItemModalOpened"
          :data="this.itemModalData"
          :dataType="this.$props.dataType"
          @closeModal="isItemModalOpened = false"
      />
  </div>
</template>

<script>
    import ItemModal from 'src/components/modals/ItemModal'

    export default {
        name: 'DataTable',

        data() {
            return {
                isItemModalOpened: false,
                itemModalData: null
            }
        },

        methods: {
          openItemModal(row, data) {
                this.isItemModalOpened = true
                this.itemModalData = data
            },
        },

        components: {
            ItemModal
        },

        props: {
            data: { type: Array },
            columns: { type: Array },
            dataType: { type: String }
        }
    }
</script>

<style lang="sass">
    .my-sticky-header-column-table
      /* height or max-height is important */

      max-height: 500px
    
      /* specifying max-width so the example can
        highlight the sticky column on any browser window */
      max-width: 100%
      min-width: 480px

      td:not(:last-child)
        border-right: 1px solid #dedede
        
    
      td:first-child
        /* bg color is important for td; just specify one */
        background-color: #c1f4cd !important
    
      tr th
        position: sticky
        /* higher than z-index for td below */
        z-index: 2
        /* bg color is important; just specify one */
        background: #fff
    
      /* this will be the loading indicator */
      thead tr:last-child th
        /* height of all previous header rows */
        top: 48px
        /* highest z-index */
        z-index: 3
      thead tr:first-child th
        top: 0
        z-index: 1
      tr:first-child th:first-child
        /* highest z-index */
        z-index: 3
    
      td:first-child
        z-index: 1
    
      td:first-child, th:first-child
        position: sticky
        left: 0
</style>