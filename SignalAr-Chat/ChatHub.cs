using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalAr_Chat
{
    public class ChatHub:Hub
    {
        public async Task SendMessageAsyc(string room, string user, string message) 
        {
            await Clients.Group(room).SendAsync("ReciveMessage", user, message);
        }

        public async Task AddToGroupAsync(string room)
        {
           //Añadir Sala de Chat
            await Groups.AddToGroupAsync(Context.ConnectionId, room);


            await Clients.Group(room).SendAsync("ShowHo",$"Alguien se Conecto {Context.ConnectionId}");
        }

    }
}
