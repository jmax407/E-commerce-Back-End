const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      {
        model: Product
      }
    ]
  }).then(dbGetDat => res.json(dbGetDat))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: res.params.id  
    },
    include: [
      {
        model: Product
      }
    ]
  }).then(dbGetDat => res.json(dbGetDat))
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: res.body.category_name
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.put({
    where: {
      id: res.params.id  
    }
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: res.params.id  
    }
  })
});

module.exports = router;
