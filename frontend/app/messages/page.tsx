"use client"

import { useState } from "react"
import { Send, Search, Phone, Video, MoreVertical, Paperclip, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"

const conversations = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thanks for the great session!",
    time: "2m ago",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Can we reschedule to tomorrow?",
    time: "1h ago",
    unread: 0,
    online: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "I have a question about the lesson",
    time: "3h ago",
    unread: 1,
    online: false,
  },
  {
    id: 4,
    name: "David Kim",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Looking forward to our session!",
    time: "1d ago",
    unread: 0,
    online: false,
  },
]

const messages = [
  {
    id: 1,
    sender: "Sarah Johnson",
    content: "Hi! I'm really excited to learn web design from you.",
    time: "10:30 AM",
    isOwn: false,
  },
  {
    id: 2,
    sender: "You",
    content: "Hello Sarah! I'm excited to teach you. Do you have any specific areas you'd like to focus on?",
    time: "10:32 AM",
    isOwn: true,
  },
  {
    id: 3,
    sender: "Sarah Johnson",
    content: "I'd love to learn about responsive design and modern CSS techniques.",
    time: "10:35 AM",
    isOwn: false,
  },
  {
    id: 4,
    sender: "You",
    content:
      "Perfect! We'll cover Flexbox, Grid, and mobile-first design principles. I'll prepare some examples for our session.",
    time: "10:37 AM",
    isOwn: true,
  },
  {
    id: 5,
    sender: "Sarah Johnson",
    content: "That sounds great! Thanks for the great session!",
    time: "10:40 AM",
    isOwn: false,
  },
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [messageInput, setMessageInput] = useState("")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      console.log("Sending message:", messageInput)
      setMessageInput("")
    }
  }

  return (
    <div className="w-full py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Messages</h1>
          <p className="text-muted-foreground">Chat with your teachers and students</p>
        </div>

        <Card className="h-[calc(100vh-16rem)] flex overflow-hidden">
          {/* Conversations Sidebar */}
          <div
            className={`${
              isSidebarOpen ? "w-full md:w-80" : "w-0"
            } border-r border-border transition-all duration-300 flex flex-col`}
          >
            <div className="p-4 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search conversations..." className="pl-9" />
              </div>
            </div>

            <ScrollArea className="flex-1">
              <div className="p-2">
                {conversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() => {
                      setSelectedConversation(conversation)
                      setIsSidebarOpen(false)
                    }}
                    className={`w-full p-3 rounded-lg flex items-start gap-3 hover:bg-accent transition-colors ${
                      selectedConversation.id === conversation.id ? "bg-accent" : ""
                    }`}
                  >
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                        <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
                      )}
                    </div>
                    <div className="flex-1 text-left min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm truncate">{conversation.name}</span>
                        <span className="text-xs text-muted-foreground">{conversation.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                        {conversation.unread > 0 && (
                          <span className="ml-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                            {conversation.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
                  <MoreVertical className="h-5 w-5" />
                </Button>
                <Avatar>
                  <AvatarImage
                    src={selectedConversation.avatar || "/placeholder.svg"}
                    alt={selectedConversation.name}
                  />
                  <AvatarFallback>{selectedConversation.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{selectedConversation.name}</h3>
                  <p className="text-xs text-muted-foreground">{selectedConversation.online ? "Online" : "Offline"}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[70%] ${message.isOwn ? "order-2" : "order-1"}`}>
                      <div
                        className={`rounded-lg p-3 ${
                          message.isOwn ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 px-1">{message.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Smile className="h-5 w-5" />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="icon">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
