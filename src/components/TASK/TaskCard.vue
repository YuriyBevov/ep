<template>
    <q-card  flat bordered>
        <q-card-section horizontal>
            <q-card-section class="my-card flex column">
                <div class="text-h6">{{this.$props.taskData.title}}</div>
                <q-card-section class="q-pt-none">
                    {{this.$props.taskData.description}}
                </q-card-section>

                <q-card-section class="q-pt-none">
                
                    <span class="text-subtitle2">{{this.$props.taskData.createdBy}}</span>
                    <span> {{this.$props.taskData.createdDate}} </span>
                    <span> {{this.$props.taskData.createdTime}} </span>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    {{this.$props.taskData.status}}
                </q-card-section>
            </q-card-section>
         
            <q-card-actions vertical class="justify-around q-px-md">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="accent" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
            </q-card-actions>
        </q-card-section>
    </q-card>
</template>

<script>
    export default {
        name: "TaskCard",

        props: {
            taskData: { type: Array } 
        }
    }
</script>