//Modified from https://davidwalsh.name/watch-object-changes

export function onChange(obj, callback) {
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
            callback();
            return ret;
        },
        deleteProperty(target, property) {
            var ret = Reflect.deleteProperty(target, property);
            callback();
            return ret;
        }
    };
    callback();
    return new Proxy(obj, handler);
};