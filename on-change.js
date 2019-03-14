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
			return Reflect.defineProperty(target, property, descriptor) && (callback() || 1);
		},
		deleteProperty(target, property) {
			return Reflect.deleteProperty(target, property) && (callback() || 1);
		}
	};
    callback();
	return new Proxy(obj, handler);
};