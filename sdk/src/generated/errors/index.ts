/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number }
type MaybeErrorWithCode = ErrorWithCode | null | undefined

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map()
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map()

/**
 * InvalidMint: 'Invalid mint'
 *
 * @category Errors
 * @category generated
 */
export class InvalidMintError extends Error {
  readonly code: number = 0x1770
  readonly name: string = 'InvalidMint'
  constructor() {
    super('Invalid mint')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidMintError)
    }
  }
}

createErrorFromCodeLookup.set(0x1770, () => new InvalidMintError())
createErrorFromNameLookup.set('InvalidMint', () => new InvalidMintError())

/**
 * InvalidMetadata: 'Invalid metadata'
 *
 * @category Errors
 * @category generated
 */
export class InvalidMetadataError extends Error {
  readonly code: number = 0x1771
  readonly name: string = 'InvalidMetadata'
  constructor() {
    super('Invalid metadata')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidMetadataError)
    }
  }
}

createErrorFromCodeLookup.set(0x1771, () => new InvalidMetadataError())
createErrorFromNameLookup.set(
  'InvalidMetadata',
  () => new InvalidMetadataError()
)

/**
 * InvalidTokenAccount: 'Invalid token account'
 *
 * @category Errors
 * @category generated
 */
export class InvalidTokenAccountError extends Error {
  readonly code: number = 0x1772
  readonly name: string = 'InvalidTokenAccount'
  constructor() {
    super('Invalid token account')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidTokenAccountError)
    }
  }
}

createErrorFromCodeLookup.set(0x1772, () => new InvalidTokenAccountError())
createErrorFromNameLookup.set(
  'InvalidTokenAccount',
  () => new InvalidTokenAccountError()
)

/**
 * InvalidAuthority: 'Invalid authority address'
 *
 * @category Errors
 * @category generated
 */
export class InvalidAuthorityError extends Error {
  readonly code: number = 0x1773
  readonly name: string = 'InvalidAuthority'
  constructor() {
    super('Invalid authority address')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidAuthorityError)
    }
  }
}

createErrorFromCodeLookup.set(0x1773, () => new InvalidAuthorityError())
createErrorFromNameLookup.set(
  'InvalidAuthority',
  () => new InvalidAuthorityError()
)

/**
 * InvalidPolicyCreation: 'Invalid policy creation'
 *
 * @category Errors
 * @category generated
 */
export class InvalidPolicyCreationError extends Error {
  readonly code: number = 0x1774
  readonly name: string = 'InvalidPolicyCreation'
  constructor() {
    super('Invalid policy creation')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidPolicyCreationError)
    }
  }
}

createErrorFromCodeLookup.set(0x1774, () => new InvalidPolicyCreationError())
createErrorFromNameLookup.set(
  'InvalidPolicyCreation',
  () => new InvalidPolicyCreationError()
)

/**
 * InvalidPolicyEvaluation: 'Invalid policy evaluation'
 *
 * @category Errors
 * @category generated
 */
export class InvalidPolicyEvaluationError extends Error {
  readonly code: number = 0x1775
  readonly name: string = 'InvalidPolicyEvaluation'
  constructor() {
    super('Invalid policy evaluation')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidPolicyEvaluationError)
    }
  }
}

createErrorFromCodeLookup.set(0x1775, () => new InvalidPolicyEvaluationError())
createErrorFromNameLookup.set(
  'InvalidPolicyEvaluation',
  () => new InvalidPolicyEvaluationError()
)

/**
 * InvalidPolicyMintAssociation: 'Invalid policy mint association'
 *
 * @category Errors
 * @category generated
 */
export class InvalidPolicyMintAssociationError extends Error {
  readonly code: number = 0x1776
  readonly name: string = 'InvalidPolicyMintAssociation'
  constructor() {
    super('Invalid policy mint association')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidPolicyMintAssociationError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x1776,
  () => new InvalidPolicyMintAssociationError()
)
createErrorFromNameLookup.set(
  'InvalidPolicyMintAssociation',
  () => new InvalidPolicyMintAssociationError()
)

/**
 * InvalidLockedBy: 'Invalid locked by'
 *
 * @category Errors
 * @category generated
 */
export class InvalidLockedByError extends Error {
  readonly code: number = 0x1777
  readonly name: string = 'InvalidLockedBy'
  constructor() {
    super('Invalid locked by')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidLockedByError)
    }
  }
}

createErrorFromCodeLookup.set(0x1777, () => new InvalidLockedByError())
createErrorFromNameLookup.set(
  'InvalidLockedBy',
  () => new InvalidLockedByError()
)

/**
 * MintStateLocked: 'Mint state is locked'
 *
 * @category Errors
 * @category generated
 */
export class MintStateLockedError extends Error {
  readonly code: number = 0x1778
  readonly name: string = 'MintStateLocked'
  constructor() {
    super('Mint state is locked')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MintStateLockedError)
    }
  }
}

createErrorFromCodeLookup.set(0x1778, () => new MintStateLockedError())
createErrorFromNameLookup.set(
  'MintStateLocked',
  () => new MintStateLockedError()
)

/**
 * UnknownAccount: 'Unknown account found in instruction'
 *
 * @category Errors
 * @category generated
 */
export class UnknownAccountError extends Error {
  readonly code: number = 0x1779
  readonly name: string = 'UnknownAccount'
  constructor() {
    super('Unknown account found in instruction')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnknownAccountError)
    }
  }
}

createErrorFromCodeLookup.set(0x1779, () => new UnknownAccountError())
createErrorFromNameLookup.set('UnknownAccount', () => new UnknownAccountError())

/**
 * AccountNotFound: 'Account not found in instruction'
 *
 * @category Errors
 * @category generated
 */
export class AccountNotFoundError extends Error {
  readonly code: number = 0x177a
  readonly name: string = 'AccountNotFound'
  constructor() {
    super('Account not found in instruction')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AccountNotFoundError)
    }
  }
}

createErrorFromCodeLookup.set(0x177a, () => new AccountNotFoundError())
createErrorFromNameLookup.set(
  'AccountNotFound',
  () => new AccountNotFoundError()
)

/**
 * InvalidDynamicRoyalty: 'Invalid dynamic royalty'
 *
 * @category Errors
 * @category generated
 */
export class InvalidDynamicRoyaltyError extends Error {
  readonly code: number = 0x177b
  readonly name: string = 'InvalidDynamicRoyalty'
  constructor() {
    super('Invalid dynamic royalty')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidDynamicRoyaltyError)
    }
  }
}

createErrorFromCodeLookup.set(0x177b, () => new InvalidDynamicRoyaltyError())
createErrorFromNameLookup.set(
  'InvalidDynamicRoyalty',
  () => new InvalidDynamicRoyaltyError()
)

/**
 * NumericalOverflow: 'Numerical overflow'
 *
 * @category Errors
 * @category generated
 */
export class NumericalOverflowError extends Error {
  readonly code: number = 0x177c
  readonly name: string = 'NumericalOverflow'
  constructor() {
    super('Numerical overflow')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NumericalOverflowError)
    }
  }
}

createErrorFromCodeLookup.set(0x177c, () => new NumericalOverflowError())
createErrorFromNameLookup.set(
  'NumericalOverflow',
  () => new NumericalOverflowError()
)

/**
 * NotImplemented: 'Not Implemented'
 *
 * @category Errors
 * @category generated
 */
export class NotImplementedError extends Error {
  readonly code: number = 0x177d
  readonly name: string = 'NotImplemented'
  constructor() {
    super('Not Implemented')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NotImplementedError)
    }
  }
}

createErrorFromCodeLookup.set(0x177d, () => new NotImplementedError())
createErrorFromNameLookup.set('NotImplemented', () => new NotImplementedError())

/**
 * InvalidMetadataUpdateAuthority: 'Invalid metadata update_authority'
 *
 * @category Errors
 * @category generated
 */
export class InvalidMetadataUpdateAuthorityError extends Error {
  readonly code: number = 0x177e
  readonly name: string = 'InvalidMetadataUpdateAuthority'
  constructor() {
    super('Invalid metadata update_authority')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidMetadataUpdateAuthorityError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x177e,
  () => new InvalidMetadataUpdateAuthorityError()
)
createErrorFromNameLookup.set(
  'InvalidMetadataUpdateAuthority',
  () => new InvalidMetadataUpdateAuthorityError()
)

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code)
  return createError != null ? createError() : null
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name)
  return createError != null ? createError() : null
}
