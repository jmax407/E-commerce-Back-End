const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product
      }
    ]
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: res.params.id
    },
    include: [
      {
        model: Product
      }
    ]
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: res.body.tag_name
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.put({
    where: {
      id: res.params.id  
    }
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: res.params.id  
    }
  })
});

module.exports = router;
