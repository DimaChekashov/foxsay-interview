import json
from typing import Any


class NestedInteger:
    def __init__(self, value: int = None):
        self._integer = value
        self._list = []

    def is_integer(self) -> bool:
        return self._integer is not None

    def get_integer(self) -> int:
        return self._integer

    def set_integer(self, value: int) -> None:
        self._integer = value

    def get_list(self) -> list:
        return self._list

    def add(self, ni: "NestedInteger") -> None:
        self._list.append(ni)


def deserialize(s: str) -> NestedInteger:
    data = json.loads(s)

    def build(x: Any) -> NestedInteger:
        ni = NestedInteger()

        if isinstance(x, int):
            ni.set_integer(x)
        else:
            for val in x:
                ni.add(build(val))

        return ni

    return build(data)