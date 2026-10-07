def calculate(s: str) -> int:
    num = ''
    prev_operator = '+'
    stack = []

    for i in range(len(s) + 1):
        ch = s[i] if i < len(s) else ''

        if ch.isdigit():
            num += ch

        if (not ch.isdigit() and ch != ' ') or i == len(s):
            if prev_operator == '+':
                stack.append(int(num))
            elif prev_operator == '-':
                stack.append(-int(num))
            elif prev_operator == '*':
                stack.append(stack.pop() * int(num))
            elif prev_operator == '/':
                stack.append(int(stack.pop() / int(num)))

            prev_operator = ch
            num = ''

    return sum(stack)