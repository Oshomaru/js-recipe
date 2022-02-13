const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const mainasButton = document.getElementById("mainas-button")
const baiButton = document.getElementById("bai-button")

let count = 0

// ボタンをクリックしたときの処理を登録
plusButton.onclick = function () {
  // count を更新
  count += 2
  // count を表示
  display.textContent = count
}

mainasButton.onclick = function () {
  count -= 2
  display.textContent = count
}

baiButton.onclick = function () {
  count *= 2
  display.textContent = count
}
