from typing import List


def find_redundant_connection(edges: List[List[int]]) -> List[int]:
    n = len(edges)
    parent = list(range(n + 1))

    def find(u: int) -> int:
        while u != parent[u]:
            parent[u] = parent[parent[u]]
            u = parent[u]
        return u

    def union(u: int, v: int) -> bool:
        root_u = find(u)
        root_v = find(v)

        if root_u == root_v:
            return False

        parent[root_v] = root_u
        return True

    for u, v in edges:
        if not union(u, v):
            return [u, v]

    return []