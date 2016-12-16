// useful commands

// flush road construction traces
_.forEach(Memory.rooms, r => delete r.roadConstructionTrace);

// remove all construction Sites
_.forEach(Game.constructionSites, s => s.remove());

// spawn something...
Game.spawns['<spawnName>'].createCreepBySetup(Creep.setup.worker);
// or
Game.rooms['<roomName>'].spawnQueueLow.push({parts:[MOVE,WORK,CARRY],name:'max',setup:'worker'});

// move Creep
Game.creeps['<creepName>'].move(RIGHT);

// create market order (replace [roomName] with target room or remove it for subscription tokens)
Game.market.createOrder(type, resourceType, price, totalAmount, roomName);
//these should work as well
Game.market.createBuyOrder(resourceType, price, totalAmount, roomName);
Game.market.createSellOrder(resourceType, price, totalAmount, roomName);

//accept market sell or buy order
Game.market.deal(orderId, amount, roomName);

// To override a module file create a copy of an existing module and name it "custom.<originalModuleName>". Then call this method (without ".js"): 
getPath('<originalModuleName>', true);
// To completely re-evaluate all modules:
delete Memory.modules; 