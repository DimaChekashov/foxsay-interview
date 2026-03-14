class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        
class SinglyLinkedList:
    def __init__(self):
        self.head = None
        
    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
        
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        last_node = self.head
        while last_node.next:
            last_node = last_node.next 
        last_node.next = new_node
        
    def insert(self, data, index):
        new_node = Node(data)
        if index == 0:
            new_node.next = self.head
            self.head = new_node
            return
        current_node = self.head
        current_index = 0
        while current_node and current_index < index - 1:
            current_node = current_node.next
            current_index += 1
        if not current_node:
            raise IndexError("Index out of bounds")
        new_node.next = current_node.next
        current_node.next = new_node
        
    def remove(self, index):
        if not self.head:
            raise IndexError("Index out of bounds")
        if index == 0:
            self.head = self.head.next
            return
        current_node = self.head
        current_index = 0
        while current_node.next and current_index < index - 1:
            current_node = current_node.next
            current_index += 1
        if not current_node.next:
            raise IndexError("Index out of bounds")
        current_node.next = current_node.next.next
        
    def find(self, data):
        current_node = self.head
        index = 0
        while current_node:
            if current_node.data == data:
                return index
            current_node = current_node.next
            index += 1
        return -1
        
    def get(self, index):
        current_node = self.head
        current_index = 0
        while current_node and current_index < index:
            current_node = current_node.next
            current_index += 1
        if not current_node:
            raise IndexError("Index out of bounds")
        return current_node.data