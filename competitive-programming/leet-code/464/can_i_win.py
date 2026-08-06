def can_i_win(maxn: int, total: int) -> bool:
    if total == 0:
        return True
    
    sumn = (maxn * (maxn + 1)) // 2
    if sumn < total:
        return False
    
    masks = [None] * (1 << maxn)
    bit_maskmaxn = (1 << maxn) - 1
    
    def solve(current_mask: int, total: int) -> bool:
        if current_mask <= 0:
            return False
        if total <= 0:
            return False
        if masks[current_mask] is not None:
            return masks[current_mask]
        
        n = 1
        bit_mask = 1
        while n <= maxn and bit_mask <= current_mask:
            nNotTaken = current_mask & bit_mask
            if nNotTaken:
                current_mask_without_n = current_mask ^ bit_mask
                total_without_n = total - n
                if not solve(current_mask_without_n, total_without_n):
                    masks[current_mask] = True
                    return True
            n += 1
            bit_mask = bit_mask << 1
        
        masks[current_mask] = False
        return False
    
    return solve(bit_maskmaxn, total)