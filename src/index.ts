type FunctionType = (payload?: unknown) => void;

interface CacheType {
  [key: string]: FunctionType[];
}

class EventHub {
  cache: CacheType = {};
  on(eventName: string, fn: FunctionType) {
    this.getCacheByEventName(eventName).push(fn);
  }
  emit(eventName: string, payload?: unknown) {
    this.getCacheByEventName(eventName).map((fn) => fn(payload));
  }
  off(eventName: string, fn: FunctionType) {
    const index = this.getCacheByEventName(eventName).indexOf(fn);
    if (index !== -1) {
      this.getCacheByEventName(eventName).splice(index, 1);
    }
  }
  getCacheByEventName(eventName: string) {
    this.cache[eventName] = this.cache[eventName] || [];
    return this.cache[eventName];
  }
}

export default EventHub;
