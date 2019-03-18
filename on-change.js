//Modified from https://davidwalsh.name/watch-object-changes

export function onChangeObserve(obj) {
    const callbacks = () => {
        obj._onChange.forEach(callback => callback());
    };
    const handler = {
        get(target, property, receiver) {
            try {
                return new Proxy(target[property], handler);
            } catch (err) {
                return Reflect.get(target, property, receiver);
            }
        },
        defineProperty(target, property, descriptor) {
            var ret = Reflect.defineProperty(target, property, descriptor);
            callbacks();
            return ret;
        },
        deleteProperty(target, property) {
            var ret = Reflect.deleteProperty(target, property);
            callbacks();
            return ret;
        }
    };
    return new Proxy(obj, handler);
}

export function onChangeAutorun(obj, callback) {
    obj._onChange.push(callback);
    return callback();
}