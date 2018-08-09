"use strict";

function TodoController() {
    const vm = this;
    vm.list = [
        {
            task: "Cut the grass",
            completed: false
        },
        {
            task: "Take out the trash",
            completed: false
        },
        {
            task: "Pay the bills",
            completed: true
        },
        {
            task: "Pick up the kids",
            completed: false
        }
    ];
}

angular
    .module("todoApp")
    .controller("TodoController", TodoController);