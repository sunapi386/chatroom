# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
class MsgChannel < ApplicationCable::Channel
  def subscribed
    stream_from "msgs"
  end

  def receive(data)
    ActionCable.server.broadcast 'msgs', data
  end
end
