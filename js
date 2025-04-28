// script.js for Snap Happy Photography

// Toggle visibility of the chat box
function toggleChat() {
  const chatBox = document.getElementById('chatBox');
  if (chatBox) {
    chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
  }
}

// Optional: Auto-scroll chat to bottom when opened
function scrollToBottom() {
  const chatMessages = document.querySelector('.chat-messages');
  if (chatMessages) {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Example usage: scroll chat to bottom on toggle
function toggleChatWithScroll() {
  toggleChat();
  setTimeout(scrollToBottom, 100);
}

// Hook up event listeners after DOM loads
window.addEventListener('DOMContentLoaded', () => {
  const chatBubble = document.querySelector('.chat-bubble');
  const closeBtn = document.querySelector('.close-btn');

  if (chatBubble) {
    chatBubble.addEventListener('click', toggleChat);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', toggleChat);
  }
});
