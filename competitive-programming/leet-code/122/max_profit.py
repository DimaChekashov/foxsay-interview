def max_profit(prices: list[int]) -> int:
    if not prices:
        return 0
    
    return sum(
        max(prices[i] - prices[i-1], 0) 
        for i in range(1, len(prices))
    )