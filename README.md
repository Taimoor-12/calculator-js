# 🧮 Calculator App

A responsive, interactive calculator built with **vanilla JavaScript**, **HTML**, and **CSS**. Supports keyboard input, real-time UI feedback, and basic arithmetic operations with clean and maintainable code structure.

---

## 🚀 Features

- ✅ **Basic arithmetic operations**: Addition, subtraction, multiplication, and division  
- ✅ **Decimal support**
- ✅ **Keyboard support** for numbers, operators, Backspace, Escape, and Enter
- ✅ **Responsive design**
- ✅ **Live button highlighting** when keys are pressed
- ✅ **Error handling** (e.g., division by zero)
- ✅ **Clean, modular codebase** with well-named functions and logic separation

---

## 🧠 How It Works

- All operations are handled via named functions (`add`, `subtract`, etc.)
- State is tracked using `operand1`, `operand2`, and `operator`
- UI is updated through DOM manipulation
- Keyboard events map to button presses for improved UX
- Decimal and backspace handling ensure valid input at all times

---

## 🧪 Example Operations

- `12 + 7 = 19`
- `5 * 3 = 15`
- `9 / 0` → ❌ Shows alert: "You cannot divide with zero!"
- `0.5 + 0.3 = 0.80` → Auto-formats floats to 2 decimal places when necessary

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/Taimoor-12/calculator-js.git
cd calculator-js
