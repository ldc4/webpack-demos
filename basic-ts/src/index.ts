import './css/reset.css';
import './css/iconfont.css';
import './css/style.less';
import './basic';


const debounce = (fn: Function, time: number): any => {
    let timeout: NodeJS.Timer = null;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn.apply(this, args);
      }, time);
    };
}


// 《5分钟上手Typescript》代码验证
// https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html

class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person : Person) {
  return " - " + person.firstName + "/" + person.lastName;
}

let user = new Student("Weedust", ".", "ldc4");

document.getElementsByClassName('content')[0].addEventListener('mouseover', debounce(() => {
  console.log('哟');
}, 500));

document.getElementsByClassName('author')[0].innerHTML = greeter(user);
