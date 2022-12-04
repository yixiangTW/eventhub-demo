import EventHub from "../src";

const test_1 = ((message?: string) => {
  const eventHub = new EventHub();
  let called = false;
  eventHub.on("xxx", (data: any) => {
    called = true;
    console.assert(data === 111);
  });
  eventHub.emit("xxx", 111);
  console.assert(called);
  console.log(message + " test success!");
})("On function correctly then emit function Correctly");

const test_3 = ((message?: string) => {
  const eventHub = new EventHub();
  let called = false;
  const fn = () => {
    called = true;
  };
  eventHub.on("yyy", fn);
  eventHub.off("yyy", fn);
  eventHub.emit("yyy", 111);
  console.assert(called === false);
  console.log(message + " test success!");
})("Usefully off function");
