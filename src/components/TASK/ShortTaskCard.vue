<template>
    <div class="q-mb-md"> 
        <p class="q-mb-md">{{this.$props.title}}:</p>

        <q-list class="flex no-wrap" v-if="$props.tasks.length">
            <q-item 
                dense 
                style="width: 150px;"
                :style="'border: 1px solid' + $props.color"
                clickable v-ripple
                v-for="(task, i) of this.$props.tasks"
                :key="'task_i' + i"
                class="flex items-center q-mr-sm"
                @click="emitTaskID(task._id)"
            >
                <q-item-section>{{task.title}}</q-item-section>
            
                <q-icon :style="'color:' + $props.color" name="navigate_next" size="20px"/>
            </q-item>
        </q-list>
        <span v-else class="text-italic">{{this.$props.emptyText}}</span>
    </div>
</template>

<script>
    export default {
        name: 'ShortTaskCard',

        props: {
            title: { type: String },
            emptyText: {type: String },
            tasks: { type: Array },
            color: { type: String }
        },

        methods: {
            emitTaskID(id) {
                this.$emit('openTask', id)
            }
        }
    }
</script>