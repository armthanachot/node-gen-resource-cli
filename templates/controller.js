const findAll = async (req, res) => {
  try {
    console.log("find all")
  } catch (error) {
    console.log(error)
  }
}

const findById = async (req, res) => {
  try {
    const { id } = req.params
    console.log("find by id")
  } catch (error) {
    console.log(error)
  }
}

const create = async (req, res) => {
  try {
    console.log("create")
  } catch (error) {
    console.log(error)
  }
}

const update = async (req, res) => {
  try {
    console.log("update")
  } catch (error) {
    console.log(error)
  }
}

const destroy = async (req, res) => {
  try {
    console.log("destroy")
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  findAll,
  findById,
  create,
  update,
  destroy, 
}