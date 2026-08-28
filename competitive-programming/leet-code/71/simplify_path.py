def simplify_path(path: str) -> str:
    components = path.split("/")
    stack = []

    for comp in components:
        if comp == "" or comp == ".":
            continue

        if comp == "..":
            if stack:
                stack.pop()
        else:
            stack.append(comp)

    return "/" + "/".join(stack)