function LocalStorageConstructor(){
	const _localStorage = {}

	const localStorageIsUndefined = () => !window || !window.localStorage

	const checkLocalStorageAndRun = (toMemory, toStorage) => {
		if (localStorageIsUndefined() === true) {
			try { return toMemory()  } catch (err) { console.error(err) }
		} else {
			try { return toStorage() } catch (err) { console.error(err) }
		}
	}

	const getKey = (key) => checkLocalStorageAndRun(
		() => _localStorage[key],
		() => localStorage[key]
	)

	const setKey = (key) => checkLocalStorageAndRun(
		() => _localStorage[key] = value,
		() => localStorage[key] = value
	)

	const deleteKey = (key) => checkLocalStorageAndRun(
		() => delete _localStorage[key],
		() => delete localStorage[key]
	)

	return Object.freeze({
		getKey,
		setKey,
		deleteKey,
	})

}

const LocalStorage = new LocalStorageConstructor()

export default LocalStorage
