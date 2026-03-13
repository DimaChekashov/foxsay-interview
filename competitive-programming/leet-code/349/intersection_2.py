class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums1.sort()
        nums2.sort()
        traversal = []
        n_idx, m_idx = 0, 0

        while n_idx < len(nums1) and m_idx < len(nums2):
            if nums1[n_idx] == nums2[m_idx]:
                if not traversal or traversal[-1] != nums1[n_idx]:
                    traversal.append(nums1[n_idx])
                n_idx += 1
                m_idx += 1
            elif nums1[n_idx] < nums2[m_idx]:
                n_idx += 1
            else:
                m_idx += 1

        return traversal
