<template>
    <div class="">
        <q-tree
            :nodes="projectGroupList"
            node-key="id"
            class="bg-primary q-pa-sm"
        >
            <template v-slot:default-header="prop">
                <div class="row items-center">
                    <span class="q-mr-sm text-white">{{prop.node.label}}</span>
 
                    <q-btn
                        bordered flat outlined
                        size="md"

                        :color="   prop.node.type === 'project'        ? 'green'         : 
                                   prop.node.type === 'task'           ? 'red'            : 
                                   prop.node.type === 'project-group'   ? 'blue-4'    :   null 
                               "

                        icon="keyboard_tab"

                        :to="   prop.node.type === 'project'        ? 'project/' + prop.node.id         : 
                                prop.node.type === 'task'           ? 'task/' + prop.node.id            : 
                                prop.node.type === 'project-group'   ? 'projectGroup/' + prop.node.id    :   null 
                            "
                    />
                </div>
            </template>
        </q-tree>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
                projectGroupList: [
                    {
                        id: 1,
                        label: 'Ароматный мир',
                        type: 'project-group',

                        children: [
                            {
                                id: 11,
                                label: 'Проект №1',
                                type:  'project',

                                children: [
                                    {
                                        id: 111,
                                        label: 'Задача №1',
                                        type: 'task',

                                        children: [
                                            {
                                                id: 1111,
                                                label: 'Подзадача к задаче №1',
                                                type: 'task',

                                                children: [
                                                    {
                                                        id: 11111,
                                                        label: 'Подподзадача к задаче №1',
                                                        type: 'task',

                                                        children: [
                                                            {
                                                                id: 111111,
                                                                label: 'Подподподзадача к задаче №1',
                                                                type: 'task',
                                                            }
                                                        ]
                                                    }
                                                ]
                                            } 
                                        ]
                                    }
                                ]
                            },

                            {
                                id: 12,
                                label: 'Проект №2',
                                type:  'project',

                                children: [
                                    {
                                        id: 121,
                                        label: 'Задача №2',
                                        type: 'task',

                                        children: [
                                            {
                                                id: 1211,
                                                label: 'Подзадача №1',
                                                type: 'task'
                                            },
                                            {
                                                id: 1212,
                                                label: 'Подзадача №2',
                                                type: 'task',
                                            }
                                        ]
                                    }
                                ]
            
                            },

                            {
                                label: 'Проект №3',
                                type:  'project',

                                children: [
                                    {
                                        label: 'Задача №3',
                                        type: 'task'
                                    }
                                ]
            
                            }
                        ]
                    },

                    {
                        id: 7111,
                        label: 'Аптека для бережливых',
                        type: 'project-group',

                        children: [
                            {
                                id: 71111,
                                label: 'Проект №1',
                                type:  'project',

                                children: [
                                    {
                                        id: 711111,
                                        label: 'Задача №1',
                                        type: 'task',

                                        children: [
                                            {
                                                id: 7111111,
                                                label: 'Подзадача к задаче №1',
                                                type: 'task',

                                                children: [
                                                    {
                                                        id: 71111111,
                                                        label: 'Подподзадача к задаче №1',
                                                        type: 'task',

                                                        children: [
                                                            {
                                                                id: 711111111,
                                                                label: 'Подподподзадача к задаче №1',
                                                                type: 'task',
                                                            }
                                                        ]
                                                    }
                                                ]
                                            } 
                                        ]
                                    }
                                ]
                            },

                            {
                                id: 71112,
                                label: 'Проект №2',
                                type:  'project',

                                children: [
                                    {
                                        id: 711121,
                                        label: 'Задача №2',
                                        type: 'task',

                                        children: [
                                            {
                                                id: 7111211,
                                                label: 'Подзадача №1',
                                                type: 'task'
                                            },
                                            {
                                                id: 71212,
                                                label: 'Подзадача №2',
                                                type: 'task',
                                            }
                                        ]
                                    }
                                ]
            
                            },

                            {
                                label: 'Проект №3',
                                type:  'project',

                                children: [
                                    {
                                        label: 'Задача №3',
                                        type: 'task'
                                    }
                                ]
            
                            }
                        ]
                    },
                ]
            }
        },

        methods: {
            onClickShowTaskInfo(node) {
                console.log(node)
            }
        }
    }
</script>

<style lang="scss">
    .q-tree__node {
        background-color: #35706a;
    }
</style>