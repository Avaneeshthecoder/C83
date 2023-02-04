var canvas = document.getElementById("My_Canvas")
console.log(canvas)
ctx = canvas.getContext("2d")
var color = "red"
ctx.beginPath()
ctx.strokeStyle = color
ctx.lineWidth = 3
ctx.arc(200, 200, 15, 0, 2 * Math.PI)
ctx.stroke()
canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e) {
    m_x = e.clientX - canvas.offsetLeft
    m_y = e.clientY - canvas.offsetTop
    circle(m_x, m_y)
}
function circle(m_x, m_y) {
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = 3
    ctx.arc(m_x, m_y, 15, 0, 2 * Math.PI)
    ctx.stroke()
}
