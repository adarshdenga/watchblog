exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('post').del()
    .then(function () {
      // Inserts seed entries
      return knex('post').insert([{
        "title": "id nisl venenatis lacinia aenean",
        "blurb": "duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec",
        "content": "aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula",
        "date": "2020-06-11",
        "is_approved": true,
        "user_id": 8,
        "watch_id": 3
      }, {
        "title": "euismod scelerisque quam turpis adipiscing",
        "blurb": "rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus",
        "content": "habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus",
        "date": "2020-08-15",
        "is_approved": true,
        "user_id": 8,
        "watch_id": 3
      }, {
        "title": "orci luctus et ultrices",
        "blurb": "porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus",
        "content": "dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus",
        "date": "2020-06-14",
        "is_approved": true,
        "user_id": 8,
        "watch_id": 3
      }, {
        "title": "dictumst etiam faucibus",
        "blurb": "montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et",
        "content": "et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius",
        "date": "2020-11-02",
        "is_approved": false,
        "user_id": 8,
        "watch_id": 3
      }, {
        "title": "donec quis orci",
        "blurb": "mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit",
        "content": "nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel",
        "date": "2020-04-25",
        "is_approved": false,
        "user_id": 8,
        "watch_id": 3
      }, {
        "title": "et ultrices posuere",
        "blurb": "habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis",
        "content": "luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet",
        "date": "2020-11-28",
        "is_approved": true,
        "user_id": 8,
        "watch_id": 3
      }, {
        "title": "diam cras pellentesque",
        "blurb": "pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit",
        "content": "iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend",
        "date": "2020-07-12",
        "is_approved": true,
        "user_id": 8,
        "watch_id": 3
      }, {
        "title": "volutpat erat quisque erat",
        "blurb": "et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere",
        "content": "volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula",
        "date": "2020-08-22",
        "is_approved": true,
        "user_id": 8,
        "watch_id": 3
      }, {
        "title": "at dolor quis odio consequat",
        "blurb": "convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est",
        "content": "lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie",
        "date": "2020-07-20",
        "is_approved": false,
        "user_id": 8,
        "watch_id": 3
      }, {
        "title": "proin risus praesent lectus",
        "blurb": "ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim",
        "content": "quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id",
        "date": "2020-02-15",
        "is_approved": true,
        "user_id": 8,
        "watch_id": 3
      }, {
        "title": "viverra pede ac diam cras",
        "blurb": "rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc",
        "content": "metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac",
        "date": "2020-12-26",
        "is_approved": true,
        "user_id": 8,
        "watch_id": 3
      }, {
        "title": "tellus nisi eu",
        "blurb": "duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat",
        "content": "nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae",
        "date": "2020-08-13",
        "is_approved": true,
        "user_id": 8,
        "watch_id": 3
      }, {
        "title": "nulla tellus in sagittis dui",
        "blurb": "vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
        "content": "est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla",
        "date": "2020-06-08",
        "is_approved": false,
        "user_id": 8,
        "watch_id": 3
      }, {
        "title": "quis libero nullam sit amet turpis",
        "blurb": "lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum",
        "content": "faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet",
        "date": "2020-03-06",
        "is_approved": false,
        "user_id": 8,
        "watch_id": 3
      }, {
        "title": "sagittis nam congue risus",
        "blurb": "risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis",
        "content": "ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel",
        "date": "2020-11-01",
        "is_approved": true,
        "user_id": 8,
        "watch_id": 3
      }, {
        "title": "semper est quam",
        "blurb": "vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam",
        "content": "magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede",
        "date": "2020-02-21",
        "is_approved": true,
        "user_id": 8,
        "watch_id": 3
      }, {
        "title": "justo pellentesque viverra pede ac diam",
        "blurb": "posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum",
        "content": "dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo",
        "date": "2020-04-02",
        "is_approved": true,
        "user_id": 8,
        "watch_id": 3
      }, {
        "title": "ultrices vel augue",
        "blurb": "consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent",
        "content": "erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam",
        "date": "2020-01-25",
        "is_approved": true,
        "user_id": 8,
        "watch_id": 3
      }, {
        "title": "augue quam sollicitudin vitae",
        "blurb": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum",
        "content": "eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit",
        "date": "2020-12-27",
        "is_approved": true,
        "user_id": 8,
        "watch_id": 3
      }, {
        "title": "et magnis dis parturient montes nascetur",
        "blurb": "orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed",
        "content": "semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam",
        "date": "2020-11-09",
        "is_approved": false,
        "user_id": 8,
        "watch_id": 3
      }]);
    });
};