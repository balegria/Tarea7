<script>
import { evaluate } from 'mathjs'
export default {

    data() {
        return {
            log: ['0'],
            showMoreOperations: false,
            lastResults: []
        }
    },
    methods: {
        addNumberOrOperation(num) {
            num != '.' && this.log.length == 1 && this.log[0] === '0' ? this.log = [num] : this.log.push(num)
        },
        erase() {
            this.log = ['0']
        },
        calculate() {
            let result = evaluate(this.screen)
            this.log = [evaluate(this.screen)]
            this.lastResults.push(result)

        },
        eraseLast() {
            this.log.length == 1 ? this.log = ['0'] : this.log.pop()
        },

    },
    computed: {
        screen: {
            get() {
                return this.log.join('')
            },
        },
    }
}
</script>

<style>
input {
    text-align: right;
}
</style>

<template>
    <div class="container d-flex flex-row w-50">
        <b-card header="Calculadora" class="text-center mx-auto w-50">
            <div class="d-flex flex-column">
                <div class="d-flex flex-column mb-2">
                    <b-form-checkbox v-model="showMoreOperations" switch>
                    </b-form-checkbox>
                    <b-form-input v-model="screen" disabled></b-form-input>
                </div>
                <div v-if="showMoreOperations" class="d-flex flex-row justify-content-center">
                    <b-button @click="addNumberOrOperation(' sin')" variant="outline-primary" class="w-25">sin
                    </b-button>
                    <b-button @click="addNumberOrOperation(' cos')" variant="outline-primary" class="w-25">cos
                    </b-button>
                    <b-button @click="addNumberOrOperation(' tan')" variant="outline-primary" class="w-25">tan
                    </b-button>
                    <b-button @click="addNumberOrOperation('^')" variant="outline-primary" class="w-25">^</b-button>
                </div>
                <div v-if="showMoreOperations" class="d-flex flex-row justify-content-center">
                    <b-button @click="addNumberOrOperation('!')" variant="outline-primary" class="w-25">x!</b-button>
                    <b-button @click="addNumberOrOperation(' % ')" variant="outline-primary" class="w-25">%</b-button>
                    <b-button @click="addNumberOrOperation(' log')" variant="outline-primary" class="w-25">log
                    </b-button>
                    <b-button @click="addNumberOrOperation(' sqrt')" variant="outline-primary" class="w-25">√</b-button>
                </div>
                <div class="d-flex flex-row justify-content-center">
                    <b-button @click="addNumberOrOperation('(')" variant="outline-primary" class="w-25">(</b-button>
                    <b-button @click="addNumberOrOperation(')')" variant="outline-primary" class="w-25">)</b-button>
                    <b-button @click="eraseLast" variant="outline-primary" class="w-25">C</b-button>
                    <b-button @click="erase" variant="outline-primary" class="w-25">CE</b-button>
                </div>
                <div class="d-flex flex-row justify-content-center">
                    <b-button @click="addNumberOrOperation('7')" variant="outline-primary" class="w-25">7</b-button>
                    <b-button @click="addNumberOrOperation('8')" variant="outline-primary" class="w-25">8</b-button>
                    <b-button @click="addNumberOrOperation('9')" variant="outline-primary" class="w-25">9</b-button>
                    <b-button @click="addNumberOrOperation(' / ')" variant="outline-primary" class="w-25">÷</b-button>
                </div>
                <div class="d-flex flex-row justify-content-center">
                    <b-button @click="addNumberOrOperation('4')" variant="outline-primary" class="w-25">4</b-button>
                    <b-button @click="addNumberOrOperation('5')" variant="outline-primary" class="w-25">5</b-button>
                    <b-button @click="addNumberOrOperation('6')" variant="outline-primary" class="w-25">6</b-button>
                    <b-button @click="addNumberOrOperation(' * ')" variant="outline-primary" class="w-25">x</b-button>
                </div>
                <div class="d-flex flex-row justify-content-center">
                    <b-button @click="addNumberOrOperation('1')" variant="outline-primary" class="w-25">1</b-button>
                    <b-button @click="addNumberOrOperation('2')" variant="outline-primary" class="w-25">2</b-button>
                    <b-button @click="addNumberOrOperation('3')" variant="outline-primary" class="w-25">3</b-button>
                    <b-button @click="addNumberOrOperation(' - ')" variant="outline-primary" class="w-25">-</b-button>
                </div>
                <div class="d-flex flex-row justify-content-center">
                    <b-button @click="addNumberOrOperation('0')" variant="outline-primary" class="w-25">0</b-button>
                    <b-button @click="addNumberOrOperation('.')" variant="outline-primary" class="w-25">.</b-button>
                    <b-button @click="calculate" variant="outline-primary" class="w-25">=</b-button>
                    <b-button @click="addNumberOrOperation(' + ')" variant="outline-primary" class="w-25">+</b-button>
                </div>
            </div>
        </b-card>
        <b-card v-if="showMoreOperations" class="w-50">
            <h5>Resultados <b-badge>{{ lastResults.length }}</b-badge>
            </h5>
            <b-list-group v-for="result in lastResults.slice(-8)">
                <b-list-group-item>{{result}}</b-list-group-item>
            </b-list-group>
        </b-card>
    </div>
</template>


