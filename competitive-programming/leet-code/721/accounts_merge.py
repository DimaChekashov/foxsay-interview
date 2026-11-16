from typing import List


class DisjointSet:
    def __init__(self, n: int):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, i: int) -> int:
        if self.parent[i] != i:
            self.parent[i] = self.find(self.parent[i])
        return self.parent[i]

    def union(self, i: int, j: int) -> None:
        root_i = self.find(i)
        root_j = self.find(j)

        if root_i != root_j:
            if self.rank[root_i] < self.rank[root_j]:
                self.parent[root_i] = root_j
            elif self.rank[root_i] > self.rank[root_j]:
                self.parent[root_j] = root_i
            else:
                self.parent[root_i] = root_j
                self.rank[root_j] += 1


def accounts_merge(accounts: List[List[str]]) -> List[List[str]]:
    n = len(accounts)
    ds = DisjointSet(n)
    email_map = {}

    for i in range(n):
        for j in range(1, len(accounts[i])):
            email = accounts[i][j]

            if email in email_map:
                ds.union(i, email_map[email])
            else:
                email_map[email] = i

    merged = {}
    for email, index in email_map.items():
        root = ds.find(index)
        merged.setdefault(root, []).append(email)

    result = []
    for root, emails in merged.items():
        emails.sort()
        result.append([accounts[root][0]] + emails)

    return result