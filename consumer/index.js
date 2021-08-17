
const { Kafka } = require("kafkajs");

// λ npm run start:consume

async function consume() {
    const kafka = new Kafka({
        clientId: "aslan-id",
        brokers: ["127.0.0.1:9092"]
    });

    const consumer = kafka.consumer({
        groupId: "aslan-group"
    });
    await consumer.connect();
    console.log("Kafka consumer connected...");

    await consumer.subscribe({
      topic: "customer-topic-1",
      fromBeginning: true
    });

    await consumer.run({
        eachMessage: async ({topic, partition, message}) => {
            // 1. topic
            // 2. partition
            // 3. message

            //console.log("Partition:", partition, "Message:", message.value.toString());
            console.log({
              partition,
              offset: message.offset,
              value: message.value.toString(),
            });
        },
    });

    

}; 


consume();


console.log("consumer...");