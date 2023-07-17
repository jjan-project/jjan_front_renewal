const fakeUsers = [
  {
    id: "1",
    name: "John Doe",
    email: "test@example.com",
  },
  {
    id: "2",
    name: "Mingyu Kang",
    email: "test2@example.com",
  },
];

const fakePosts = Array.from({ length: 50 }, (_, id) => ({
  id: String(id + 1),
  title: `Fake Post ${id + 1}`,
  body: `This is the body of fake post ${id + 1}.`,
}));

export { fakeUsers, fakePosts };
