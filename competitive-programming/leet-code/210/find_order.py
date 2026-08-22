from typing import List
from collections import deque

def find_order(num_courses: int, prerequisites: List[List[int]]) -> List[int]:
    adj = [[] for _ in range(num_courses)]
    indegree = [0] * num_courses

    for course, prereq in prerequisites:
        adj[prereq].append(course)
        indegree[course] += 1

    q = deque([i for i in range(num_courses) if indegree[i] == 0])

    ans = []

    while q:
        curr = q.popleft()
        ans.append(curr)

        for neighbor in adj[curr]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                q.append(neighbor)

    return ans if len(ans) == num_courses else []