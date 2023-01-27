export const idlFactory = ({ IDL }) => {
  const AggregatorId = IDL.Nat;
  const Result_13 = IDL.Variant({
    'ok': IDL.Principal,
    'err': IDL.Variant({ 'NotFound': IDL.Null }),
  });
  const AssetId = IDL.Nat;
  const Asset = IDL.Variant({ 'ft': IDL.Tuple(AssetId, IDL.Nat) });
  const SubaccountState = IDL.Record({ 'asset': Asset });
  const Result_12 = IDL.Variant({
    'ok': IDL.Vec(SubaccountState),
    'err': IDL.Variant({ 'UnknownPrincipal': IDL.Null }),
  });
  const TxId = IDL.Nat;
  const Result_11 = IDL.Variant({
    'ok': IDL.Variant({ 'approved': IDL.Null, 'processed': IDL.Null }),
    'err': IDL.Variant({
      'AlreadyApproved': IDL.Null,
      'NotAController': IDL.Null,
      'TooManyContributions': IDL.Null,
      'AlreadyRejected': IDL.Null,
      'DeletedVirtualAccount': IDL.Null,
      'TooLargeMemo': IDL.Null,
      'TooLargeFtQuantity': IDL.Null,
      'UnknownPrincipal': IDL.Null,
      'TooLargeSubaccountId': IDL.Null,
      'MismatchInRemotePrincipal': IDL.Null,
      'NoPart': IDL.Null,
      'MismatchInAsset': IDL.Null,
      'NotFound': IDL.Null,
      'UnknownSubaccount': IDL.Null,
      'NonZeroAssetSum': IDL.Null,
      'TooLargeVirtualAccountId': IDL.Null,
      'TooManyFlows': IDL.Null,
      'UnknownVirtualAccount': IDL.Null,
      'UnknownFtAsset': IDL.Null,
      'TooLargeAssetId': IDL.Null,
      'InsufficientFunds': IDL.Null,
    }),
  });
  const SubaccountId__2 = IDL.Nat;
  const Result_10 = IDL.Variant({
    'ok': SubaccountState,
    'err': IDL.Variant({
      'UnknownPrincipal': IDL.Null,
      'UnknownSubaccount': IDL.Null,
    }),
  });
  const ProcessingError = IDL.Variant({
    'NotAController': IDL.Null,
    'TooManyContributions': IDL.Null,
    'DeletedVirtualAccount': IDL.Null,
    'TooLargeMemo': IDL.Null,
    'TooLargeFtQuantity': IDL.Null,
    'UnknownPrincipal': IDL.Null,
    'TooLargeSubaccountId': IDL.Null,
    'MismatchInRemotePrincipal': IDL.Null,
    'MismatchInAsset': IDL.Null,
    'UnknownSubaccount': IDL.Null,
    'NonZeroAssetSum': IDL.Null,
    'TooLargeVirtualAccountId': IDL.Null,
    'TooManyFlows': IDL.Null,
    'UnknownVirtualAccount': IDL.Null,
    'UnknownFtAsset': IDL.Null,
    'TooLargeAssetId': IDL.Null,
    'InsufficientFunds': IDL.Null,
  });
  const Result__1 = IDL.Variant({ 'ok': IDL.Null, 'err': ProcessingError });
  const BatchHistoryEntry = IDL.Record({
    'txNumberOffset': IDL.Nat,
    'results': IDL.Vec(Result__1),
    'batchNumber': IDL.Nat,
  });
  const AssetId__1 = IDL.Nat;
  const CreateFtError = IDL.Variant({
    'NoSpace': IDL.Null,
    'FeeError': IDL.Null,
  });
  const Result_9 = IDL.Variant({ 'ok': AssetId__1, 'err': CreateFtError });
  const VirtualAccountId = IDL.Nat;
  const Result_8 = IDL.Variant({
    'ok': IDL.Null,
    'err': IDL.Variant({
      'UnknownPrincipal': IDL.Null,
      'UnknownVirtualAccount': IDL.Null,
    }),
  });
  const Result_7 = IDL.Variant({
    'ok': IDL.Nat,
    'err': IDL.Variant({ 'UnknownPrincipal': IDL.Null }),
  });
  const Result_6 = IDL.Variant({
    'ok': SubaccountId__2,
    'err': IDL.Variant({
      'NoSpaceForPrincipal': IDL.Null,
      'NoSpaceForSubaccount': IDL.Null,
      'UnknownFtAsset': IDL.Null,
    }),
  });
  const SubaccountId = IDL.Nat;
  const VirtualAccountState = IDL.Record({
    'asset': Asset,
    'remotePrincipal': IDL.Principal,
    'backingSubaccountId': SubaccountId,
  });
  const Result_5 = IDL.Variant({
    'ok': VirtualAccountId,
    'err': IDL.Variant({
      'UnknownPrincipal': IDL.Null,
      'MismatchInAsset': IDL.Null,
      'NoSpaceForAccount': IDL.Null,
      'UnknownSubaccount': IDL.Null,
    }),
  });
  const Asset__1 = IDL.Variant({ 'ft': IDL.Tuple(AssetId, IDL.Nat) });
  const SubaccountId__1 = IDL.Nat;
  const VirtualAccountId__1 = IDL.Nat;
  const AccountReference = IDL.Variant({
    'sub': SubaccountId__1,
    'vir': IDL.Tuple(IDL.Principal, VirtualAccountId__1),
  });
  const Contribution = IDL.Record({
    'mints': IDL.Vec(Asset__1),
    'owner': IDL.Principal,
    'memo': IDL.Opt(IDL.Vec(IDL.Nat8)),
    'inflow': IDL.Vec(IDL.Tuple(AccountReference, Asset__1)),
    'burns': IDL.Vec(Asset__1),
    'outflow': IDL.Vec(IDL.Tuple(AccountReference, Asset__1)),
  });
  const Tx = IDL.Record({ 'map': IDL.Vec(Contribution) });
  const Batch = IDL.Vec(Tx);
  const NotPendingError = IDL.Variant({
    'AlreadyApproved': IDL.Null,
    'AlreadyRejected': IDL.Null,
    'NoPart': IDL.Null,
    'NotFound': IDL.Null,
  });
  const Result_4 = IDL.Variant({ 'ok': IDL.Null, 'err': NotPendingError });
  const CtrState = IDL.Record({
    'txs': IDL.Nat,
    'txsFailed': IDL.Nat,
    'txsSucceeded': IDL.Nat,
    'batches': IDL.Nat,
  });
  const Stats = IDL.Record({
    'txs': IDL.Record({
      'submitted': IDL.Nat,
      'rejected': IDL.Nat,
      'processed': IDL.Nat,
      'failed': IDL.Nat,
    }),
    'canisterStatus': IDL.Record({
      'cyclesBalance': IDL.Nat,
      'memorySize': IDL.Nat,
    }),
    'batches': IDL.Record({ 'all': CtrState, 'perAgg': IDL.Vec(CtrState) }),
    'registry': IDL.Record({
      'owners': IDL.Nat,
      'aggregators': IDL.Nat,
      'assets': IDL.Nat,
      'accounts': IDL.Nat,
    }),
  });
  const Result_3 = IDL.Variant({
    'ok': IDL.Variant({ 'submitted': TxId, 'processed': IDL.Null }),
    'err': IDL.Variant({
      'NotAController': IDL.Null,
      'TooManyContributions': IDL.Null,
      'NoSpace': IDL.Null,
      'DeletedVirtualAccount': IDL.Null,
      'TooLargeMemo': IDL.Null,
      'TooLargeFtQuantity': IDL.Null,
      'UnknownPrincipal': IDL.Null,
      'TooLargeSubaccountId': IDL.Null,
      'MismatchInRemotePrincipal': IDL.Null,
      'MismatchInAsset': IDL.Null,
      'UnknownSubaccount': IDL.Null,
      'NonZeroAssetSum': IDL.Null,
      'TooLargeVirtualAccountId': IDL.Null,
      'TooManyFlows': IDL.Null,
      'UnknownVirtualAccount': IDL.Null,
      'UnknownFtAsset': IDL.Null,
      'TooLargeAssetId': IDL.Null,
      'InsufficientFunds': IDL.Null,
    }),
  });
  const Approvals = IDL.Vec(IDL.Bool);
  const TxDetails = IDL.Record({
    'id': TxId,
    'tx': Tx,
    'status': IDL.Variant({
      'unapproved': Approvals,
      'pending': IDL.Null,
      'rejected': IDL.Null,
      'processed': IDL.Null,
      'failed': ProcessingError,
    }),
    'submitter': IDL.Principal,
  });
  const NotFoundError = IDL.Variant({ 'NotFound': IDL.Null });
  const Result_2 = IDL.Variant({ 'ok': TxDetails, 'err': NotFoundError });
  const VirtualAccountUpdateObject = IDL.Record({
    'assetBalance': IDL.Nat,
    'backingSubaccountId': SubaccountId,
  });
  const Result_1 = IDL.Variant({
    'ok': IDL.Null,
    'err': IDL.Variant({
      'DeletedVirtualAccount': IDL.Null,
      'UnknownPrincipal': IDL.Null,
      'MismatchInAsset': IDL.Null,
      'UnknownSubaccount': IDL.Null,
      'UnknownVirtualAccount': IDL.Null,
    }),
  });
  const Result = IDL.Variant({
    'ok': VirtualAccountState,
    'err': IDL.Variant({
      'DeletedVirtualAccount': IDL.Null,
      'UnknownPrincipal': IDL.Null,
      'UnknownVirtualAccount': IDL.Null,
    }),
  });
  const LedgerAPI = IDL.Service({
    'addAggregator': IDL.Func([IDL.Principal], [AggregatorId], []),
    'aggregatorPrincipal': IDL.Func([AggregatorId], [Result_13], ['query']),
    'allAssets': IDL.Func([IDL.Principal], [Result_12], ['query']),
    'approve': IDL.Func([TxId], [Result_11], []),
    'asset': IDL.Func([SubaccountId__2], [Result_10], ['query']),
    'batchesHistory': IDL.Func(
      [IDL.Nat, IDL.Nat],
      [IDL.Vec(BatchHistoryEntry)],
      ['query'],
    ),
    'createFungibleToken': IDL.Func([], [Result_9], []),
    'deleteVirtualAccount': IDL.Func([VirtualAccountId], [Result_8], []),
    'nAccounts': IDL.Func([], [Result_7], ['query']),
    'openNewAccounts': IDL.Func([IDL.Nat, AssetId__1], [Result_6], []),
    'openVirtualAccount': IDL.Func([VirtualAccountState], [Result_5], []),
    'processBatch': IDL.Func([Batch], [], []),
    'reject': IDL.Func([TxId], [Result_4], []),
    'stats': IDL.Func([], [Stats], ['query']),
    'submit': IDL.Func([Tx], [Result_3], []),
    'txDetails': IDL.Func([TxId], [Result_2], ['query']),
    'updateVirtualAccount': IDL.Func(
      [VirtualAccountId, VirtualAccountUpdateObject],
      [Result_1],
      [],
    ),
    'virtualAccount': IDL.Func([VirtualAccountId], [Result], ['query']),
  });
  return LedgerAPI;
};
export const init = ({ IDL }) => { return [IDL.Vec(IDL.Principal), IDL.Nat]; };
