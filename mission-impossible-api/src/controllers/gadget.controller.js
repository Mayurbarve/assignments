// import { PrismaClient } from './prisma/generated/index.js';
// import {
//   generateCodename,
//   generateSuccessRate,
//   generateCode
// } from '../utils/gadget.utils';

// const prisma = new PrismaClient();

// export const getAllGadgets = async (req, res, next) => {
//   try {
//     const status = req.query.status;
//     const gadgets = await prisma.gadget.findMany({
//       where: status ? { status } : {}
//     });

//     const withSuccess = gadgets.map(g => ({
//       ...g,
//       successRate: `${generateSuccessRate()}% success probability`
//     }));

//     res.json(withSuccess);
//   } catch (err) {
//     next(err);
//   }
// };

// export const createGadget = async (req, res, next) => {
//   try {
//     const codename = generateCodename();
//     const newGadget = await prisma.gadget.create({
//       data: { name: codename }
//     });

//     res.status(201).json(newGadget);
//   } catch (err) {
//     next(err);
//   }
// };

// export const updateGadget = async (req, res, next) => {
//   try {
//     const updated = await prisma.gadget.update({
//       where: { id: req.params.id },
//       data: req.body
//     });

//     res.json(updated);
//   } catch (err) {
//     next(err);
//   }
// };

// export const decommissionGadget = async (req, res, next) => {
//   try {
//     const updated = await prisma.gadget.update({
//       where: { id: req.params.id },
//       data: {
//         status: 'Decommissioned',
//         decommissionedAt: new Date()
//       }
//     });

//     res.json(updated);
//   } catch (err) {
//     next(err);
//   }
// };

// export const selfDestruct = async (req, res, next) => {
//   try {
//     const code = generateCode();
//     res.json({ message: 'Self-destruct sequence initiated', code });
//   } catch (err) {
//     next(err);
//   }
// };


import prisma from '../config/db.js';
import {
  generateCodename,
  generateSuccessRate,
  generateCode
} from '../utils/gadget.utils.js';

export const getAllGadgets = async (req, res, next) => {
  try {
    const status = req.query.status;
    const gadgets = await prisma.gadget.findMany({
      where: status ? { status } : {}
    });

    const withSuccess = gadgets.map(g => ({
      ...g,
      successRate: `${generateSuccessRate()}% success probability`
    }));

    res.json(withSuccess);
  } catch (err) {
    next(err);
  }
};

export const createGadget = async (req, res, next) => {
  try {
    const codename = generateCodename();
    const newGadget = await prisma.gadget.create({
      data: { name: codename }
    });

    res.status(201).json(newGadget);
  } catch (err) {
    next(err);
  }
};

export const updateGadget = async (req, res, next) => {
  try {
    const updated = await prisma.gadget.update({
      where: { id: req.params.id },
      data: req.body
    });

    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const decommissionGadget = async (req, res, next) => {
  try {
    const updated = await prisma.gadget.update({
      where: { id: req.params.id },
      data: {
        status: 'Decommissioned',
        decommissionedAt: new Date()
      }
    });

    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const selfDestruct = async (req, res, next) => {
  try {
    const code = generateCode();
    res.json({ message: 'Self-destruct sequence initiated', code });
  } catch (err) {
    next(err);
  }
};
