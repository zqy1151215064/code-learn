// 生成包含1-100的数组，但不包含3的倍数
// 要求1：一行代码
// 要求2：不使用Array和String相关的任何方法，包括原型链以及构造方法
// 要求3：禁止声明变量（var、let、const以及全局变量）

//  佐子哥解法  生成器
// console.log([
// 	...(function* () {
// 		while (arguments[0]++ < 100) if (arguments[0] % 3) yield arguments[0]
// 	})(0)
// ])

// Rex 佬 解法 递归匿名函数
console.log(
	Object.values(
		(function (fn, i, result) {
			return fn(fn, i, result)
		})(
			function (fn, i, result) {
				return i > 100 ? result : fn(fn, i + 1, i % 3 ? { ...result, [i]: i } : result)
			},
			1,
			{}
		)
	)
)
