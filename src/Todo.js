import web3 from './web3';

const address = '0xeD338448Ec3E70E6fAa5D1A8f511849FD40d4D8e';

const abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
    signature: 'constructor',
  },
  {
    inputs: [],
    name: 'TaskCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    signature: '0xbbba4865',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
    name: 'completed',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xc0cca5ef',
  },
  {
    inputs: [{ internalType: 'string', name: 'content', type: 'string' }],
    name: 'createTask',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x111002aa',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
    name: 'deleteTask',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x560f3192',
  },
  {
    inputs: [],
    name: 'getTasks',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'id', type: 'uint256' },
          { internalType: 'string', name: 'desc', type: 'string' },
          { internalType: 'bool', name: 'completed', type: 'bool' },
        ],
        internalType: 'struct Todo.Task[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    signature: '0x04a87e38',
  },
  {
    inputs: [],
    name: 'manager',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    signature: '0x481c6a75',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'tasks',
    outputs: [
      { internalType: 'uint256', name: 'id', type: 'uint256' },
      { internalType: 'string', name: 'desc', type: 'string' },
      { internalType: 'bool', name: 'completed', type: 'bool' },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    signature: '0x8d977672',
  },
  {
    inputs: [
      { internalType: 'string', name: 'desc', type: 'string' },
      { internalType: 'uint256', name: 'index', type: 'uint256' },
    ],
    name: 'updateTask',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x4779ba58',
  },
];

export default new web3.eth.Contract(abi, address);
