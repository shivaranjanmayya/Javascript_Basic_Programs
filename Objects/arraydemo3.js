let array = [123, true, 'felight', { x: 345 }];

function printItems(items, func) {
    for (var item of items)
        func(item);
}

function abc(x) {
    console.log(x);
}

printItems(array, abc);