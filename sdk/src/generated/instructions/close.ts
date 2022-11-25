/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category Close
 * @category generated
 */
export const closeStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'CloseInstructionArgs'
)
/**
 * Accounts required by the _close_ instruction
 *
 * @property [] policy
 * @property [] freezeAuthority
 * @property [] mint
 * @property [] metadata
 * @property [_writable_] mintState
 * @property [**signer**] from
 * @property [_writable_] fromAccount
 * @property [] cmtProgram
 * @property [] instructions
 * @category Instructions
 * @category Close
 * @category generated
 */
export type CloseInstructionAccounts = {
  policy: web3.PublicKey
  freezeAuthority: web3.PublicKey
  mint: web3.PublicKey
  metadata: web3.PublicKey
  mintState: web3.PublicKey
  from: web3.PublicKey
  fromAccount: web3.PublicKey
  tokenProgram?: web3.PublicKey
  cmtProgram: web3.PublicKey
  instructions: web3.PublicKey
}

export const closeInstructionDiscriminator = [
  98, 165, 201, 177, 108, 65, 206, 96,
]

/**
 * Creates a _Close_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category Close
 * @category generated
 */
export function createCloseInstruction(
  accounts: CloseInstructionAccounts,
  programId = new web3.PublicKey('mtokYxNhZEihbDq3r6LX22pLKnpuQvXV5kwhgCDCWw4')
) {
  const [data] = closeStruct.serialize({
    instructionDiscriminator: closeInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.policy,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.freezeAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.metadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.mintState,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.from,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.fromAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.cmtProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.instructions,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
