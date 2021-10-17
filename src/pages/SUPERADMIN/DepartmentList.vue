<template>
    <div class="">
        <q-list class="q-mb-xl">
            <q-item
                clickable 
                v-ripple
                v-for="(dep, i) of this.departmentList"
                :key="'dep_i' + i"
                bordered

                @click="onClickShowDepartmentInfo(dep._id)"
            >
                <q-item-section>
                    <q-item-label overline>{{dep.title}}</q-item-label>
                </q-item-section>

                <q-item-section side >
                    <div class="flex items-center">
                        <div class="q-mr-xs"><q-icon color="warning" name="face" size="xs"/>/{{dep.heads.length}}</div>
                        <div class="q-mr-xs"><q-icon color="positive" name="person" size="xs"/>/{{dep.members.length}}</div>
                        <div class="q-mr-xs"><q-icon color="negative" name="task" size="xs"/>/{{dep.tasks.length}}</div>
                    </div>
                </q-item-section>
            </q-item>
        </q-list>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'DepartmentList',

        methods: {
            onClickShowDepartmentInfo(id) {
                this.$router.push('department/' + id)
            }
        },

        computed: {
            ...mapGetters('department', ['departmentList']),
        }
    }
</script>