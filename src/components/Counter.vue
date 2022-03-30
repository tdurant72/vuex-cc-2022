<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <h3 class="h3 text-success">Counter</h3>
                <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fuga impedit quae! Aspernatur cum, eveniet id iste minus provident quidem quo soluta? Amet blanditiis dicta enim, nostrum nulla quis sunt?</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h3 class="h3 display-3">{{counterState.count}}</h3>
                        <button class="btn btn-success m-1" @click="
                        clickIncrement()">Increment</button>
                        <button class="btn btn-warning m-1" @click="clickDecrement()">Decrement</button>
                        <button class="btn btn-danger m-1" @click="clickIncrementBy(5)">Increment By</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
    setup () {
        const store = useStore();
        const counterState = computed(() => store.getters.getCounterState)
        const clickIncrement = () => {
            store.dispatch("counterModule/incrementCounter")
        }
        const clickDecrement = () => {
            store.dispatch("counterModule/decrementCounter")
        }
        const clickIncrementBy = (value) => {
            store.dispatch("counterModule/incrementCounterBy", { value: value })
        }
        return {
            counterState,
            clickIncrement,
            clickDecrement,
            clickIncrementBy
        }
    }
}
</script>

<style >
</style>