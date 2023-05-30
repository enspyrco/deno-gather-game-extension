import { serve } from "https://deno.land/std@0.189.0/http/server.ts";
import { Game } from "npm:@gathertown/gather-game-client@^40.0.0";
import { createGameClient } from './utils.ts';

console.log("Connecting to gather game server...");

const game : Game = createGameClient();
game.connect();
game.subscribeToConnection((connected) => console.log("connected?", connected));

game.subscribeToEvent("playerInteracts", (data, context) => {
  console.log(data.playerInteracts);
  console.log(context.playerId);
  // if (data.playerInteracts.objId === "Teleport Station") {
  //   game.teleport(data.playerInteracts.mapId!, 10, 10, context.playerId);
  // }
  
});

const port = 8080;

console.log(`HTTP webserver running on port ${port}`);
await serve((request: Request): Response => {
  return new Response('Hello!', { status: 200 });
}, { port });