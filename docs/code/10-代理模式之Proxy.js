let star = {
  name: '雪人',
  age: 24,
  phone: 'star: 15612345678'
};
let agent = new Proxy(star, {
  get: function (target, key) {
    if (key === 'phone') {
      return 'agent: 18712345678';
    }
    if (key === 'price') {
      return 12000;
    }
    return target[key];
  },
  set: function (target, key, value) {
    if (key === 'customPrice') {
      if (value < 10000) {
        throw new Error('价格太低');
      } else {
        target[key] = value;
        return true;
      }
    }
  }
});

console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);
agent.customPrice = 91999;
console.log(agent.customPrice);
