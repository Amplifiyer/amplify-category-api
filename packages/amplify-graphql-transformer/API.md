## API Report File for "@aws-amplify/graphql-transformer"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AppSyncAuthConfiguration } from '@aws-amplify/graphql-transformer-interfaces';
import { DatasourceType } from '@aws-amplify/graphql-transformer-core';
import { DeploymentResources } from '@aws-amplify/graphql-transformer-interfaces';
import { GraphQLTransform } from '@aws-amplify/graphql-transformer-core';
import { OverrideConfig } from '@aws-amplify/graphql-transformer-core';
import { RDSConnectionSecrets } from '@aws-amplify/graphql-transformer-core';
import { ResolverConfig } from '@aws-amplify/graphql-transformer-core';
import { Template } from '@aws-amplify/graphql-transformer-interfaces';
import { TransformerLog } from '@aws-amplify/graphql-transformer-interfaces';
import { TransformerPluginProvider } from '@aws-amplify/graphql-transformer-interfaces';
import type { TransformParameters } from '@aws-amplify/graphql-transformer-interfaces/src';
import { UserDefinedSlot } from '@aws-amplify/graphql-transformer-core';

// @public (undocumented)
export const constructTransform: (config: TransformConfig) => GraphQLTransform;

// @public (undocumented)
export const constructTransformerChain: (options?: TransformerFactoryArgs) => TransformerPluginProvider[];

// @public (undocumented)
export const executeTransform: (config: ExecuteTransformConfig) => DeploymentResources;

// @public (undocumented)
export type ExecuteTransformConfig = TransformConfig & {
    schema: string;
    modelToDatasourceMap?: Map<string, DatasourceType>;
    datasourceSecretParameterLocations?: Map<string, RDSConnectionSecrets>;
    printTransformerLog?: (log: TransformerLog) => void;
};

// @public (undocumented)
export type TransformConfig = {
    legacyApiKeyEnabled?: boolean;
    disableResolverDeduping?: boolean;
    transformersFactoryArgs: TransformerFactoryArgs;
    resolverConfig?: ResolverConfig;
    authConfig?: AppSyncAuthConfiguration;
    stacks?: Record<string, Template>;
    sandboxModeEnabled?: boolean;
    overrideConfig?: OverrideConfig;
    userDefinedSlots?: Record<string, UserDefinedSlot[]>;
    stackMapping?: Record<string, string>;
    transformParameters: TransformParameters;
};

// @public (undocumented)
export type TransformerFactoryArgs = {
    authConfig?: any;
    storageConfig?: any;
    adminRoles?: Array<string>;
    identityPoolId?: string;
    searchConfig?: TransformerSearchConfig;
    customTransformers?: TransformerPluginProvider[];
};

// Warnings were encountered during analysis:
//
// src/graphql-transformer.ts:47:3 - (ae-forgotten-export) The symbol "TransformerSearchConfig" needs to be exported by the entry point index.d.ts

// (No @packageDocumentation comment for this package)

```
