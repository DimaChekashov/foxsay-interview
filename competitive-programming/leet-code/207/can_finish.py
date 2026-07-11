from typing import List

def can_finish(num_courses: int, prerequisites: List[List[int]]) -> bool:
    adj = [[] for _ in range(num_courses)]
    for course, pre in prerequisites:
        adj[pre].append(course)

    visited = [False] * num_courses
    in_path = [False] * num_courses

    def dfs(node: int) -> bool:
        visited[node] = True
        in_path[node] = True

        for next_course in adj[node]:
            if not visited[next_course]:
                if dfs(next_course):
                    return True
            elif in_path[next_course]:
                return True

        in_path[node] = False
        return False

    for i in range(num_courses):
        if not visited[i]:
            if dfs(i):
                return False

    return True