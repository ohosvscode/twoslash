/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file
 * @kit ArkUI
 */
/**
 * Enumerates the data operation types.
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum DataOperationType {
    /**
     * Data addition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    ADD = 'add',
    /**
     * Data deletion.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    DELETE = 'delete',
    /**
     * Data exchange.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    EXCHANGE = 'exchange',
    /**
     * Data movement.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    MOVE = 'move',
    /**
     * Data change.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    CHANGE = 'change',
    /**
     * Data reloading.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    RELOAD = 'reload'
}
/**
 * Represents an operation for adding data.
 *
 * @interface DataAddOperation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface DataAddOperation {
    /**
     * Type of data addition.
     *
     * @type { DataOperationType.ADD }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type: DataOperationType.ADD;
    /**
     * Index at which to insert the data record.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    index: number;
    /**
     * Number of data records to insert. Default value: 1.
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    count?: number;
    /**
     * Keys to assign to the inserted data records.
     *
     * @type { ?(string | Array<string>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    key?: string | Array<string>;
}
/**
 * Represents an operation for deleting data.
 *
 * @interface DataDeleteOperation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface DataDeleteOperation {
    /**
     * Type of data deletion.
     *
     * @type { DataOperationType.DELETE }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type: DataOperationType.DELETE;
    /**
     * Index at which to start deleting data.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    index: number;
    /**
     * Number of data records to delete. Default value: 1.
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    count?: number;
}
/**
 * Represents an operation for changing data.
 *
 * @interface DataChangeOperation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface DataChangeOperation {
    /**
     * Type of data change.
     *
     * @type { DataOperationType.CHANGE }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type: DataOperationType.CHANGE;
    /**
     * Index of the data to be changed.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    index: number;
    /**
     * New key to assign to the changed data. The original key is used by default.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    key?: string;
}
/**
 * Defines position of moved data.
 *
 * @interface MoveIndex
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface MoveIndex {
    /**
     * Start position for the movement.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    from: number;
    /**
     * End position for the movement.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    to: number;
}
/**
 * Defines position of exchange data.
 *
 * @interface ExchangeIndex
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface ExchangeIndex {
    /**
     * First position for the exchange.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    start: number;
    /**
     * Second position for the exchange.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    end: number;
}
/**
 * Defines new key of exchange data.
 *
 * @interface ExchangeKey
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface ExchangeKey {
    /**
     * New key to assign to the first position in the exchange. The original key is used by default.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    start: string;
    /**
     * New key to assign to the second position in the exchange. The original key is used by default.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    end: string;
}
/**
 * Represents an operation for moving data.
 *
 * @interface DataMoveOperation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface DataMoveOperation {
    /**
     * Type of data movement.
     *
     * @type { DataOperationType.MOVE }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type: DataOperationType.MOVE;
    /**
     * Positions for the movement.
     *
     * @type { MoveIndex }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    index: MoveIndex;
    /**
     * New key to assign to the moved data. The original key is used by default.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    key?: string;
}
/**
 * Represents an operation for exchanging data.
 *
 * @interface DataExchangeOperation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface DataExchangeOperation {
    /**
     * Type of data exchange.
     *
     * @type { DataOperationType.EXCHANGE }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type: DataOperationType.EXCHANGE;
    /**
     * Positions for the exchange.
     *
     * @type { ExchangeIndex }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    index: ExchangeIndex;
    /**
     * New keys to assign to the exchanged data. The original keys are used by default.
     *
     * @type { ?ExchangeKey }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    key?: ExchangeKey;
}
/**
 * Represents an operation for reloading data.
 * If the onDatasetChange event contains a DataOperationType.RELOAD operation,
 * all other operations in the event are ineffective.In such cases, the framework will
 * call keygenerator to perform a comparison of keys with their corresponding values.
 *
 * @interface DataReloadOperation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface DataReloadOperation {
    /**
     * Type of data reloading.
     *
     * @type { DataOperationType.RELOAD }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type: DataOperationType.RELOAD;
}
/**
 * All data operation type
 *
 * @typedef { DataAddOperation | DataDeleteOperation | DataChangeOperation |DataMoveOperation | DataExchangeOperation | DataReloadOperation }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type DataOperation = DataAddOperation | DataDeleteOperation | DataChangeOperation | DataMoveOperation | DataExchangeOperation | DataReloadOperation;
/**
 * Listener for data changes.
 *
 * @interface DataChangeListener
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Listener for data changes.
 *
 * @interface DataChangeListener
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Listener for data changes.
 *
 * @interface DataChangeListener
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface DataChangeListener {
    /**
     * Invoked when all data is reloaded. For data items whose key remains unchanged,
     * the original child component is used. For data items whose key changes, a new child component is created.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Invoked when all data is reloaded. For data items whose key remains unchanged,
     * the original child component is used. For data items whose key changes, a new child component is created.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Invoked when all data is reloaded. For data items whose key remains unchanged,
     * the original child component is used. For data items whose key changes, a new child component is created.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onDataReloaded(): void;
    /**
     * Invoked when data is added to the position indicated by the specified index.
     *
     * @param { number } index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 8
     * @useinstead onDataAdd
     */
    onDataAdded(index: number): void;
    /**
     * Invoked when data is added to the position indicated by the specified index.
     *
     * @param { number } index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Invoked when data is added to the position indicated by the specified index.
     *
     * @param { number } index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Invoked when data is added to the position indicated by the specified index.
     *
     * @param { number } index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onDataAdd(index: number): void;
    /**
     * Invoked when data is moved, that is, when data is swapped between the from and to positions.
     *
     * @param { number } from
     * @param { number } to
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 8
     * @useinstead onDataMove
     */
    onDataMoved(from: number, to: number): void;
    /**
     * Invoked when data is moved, that is, when data is swapped between the **from** and **to** positions.
     *
     * @param { number } from
     * @param { number } to
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Invoked when data is moved, that is, when data is swapped between the **from** and **to** positions.
     *
     * @param { number } from
     * @param { number } to
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Invoked when data is moved, that is, when data is swapped between the **from** and **to** positions.
     *
     * @param { number } from
     * @param { number } to
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onDataMove(from: number, to: number): void;
    /**
     * Invoked when data is deleted from the position indicated by the specified index.
     * LazyForEach will update the displayed content accordingly.
     *
     * @param { number } index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 8
     * @useinstead onDataDelete
     */
    onDataDeleted(index: number): void;
    /**
     * Invoked when data is deleted from the position indicated by the specified index.
     * LazyForEach will update the displayed content accordingly.
     *
     * @param { number } index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Invoked when data is deleted from the position indicated by the specified index.
     * LazyForEach will update the displayed content accordingly.
     *
     * @param { number } index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Invoked when data is deleted from the position indicated by the specified index.
     * LazyForEach will update the displayed content accordingly.
     *
     * @param { number } index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onDataDelete(index: number): void;
    /**
     * Invoked when data in the position indicated by the specified index is changed.
     *
     * @param { number } index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 8
     * @useinstead onDataChange
     */
    onDataChanged(index: number): void;
    /**
     * Invoked when data in the position indicated by the specified index is changed.
     *
     * @param { number } index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Invoked when data in the position indicated by the specified index is changed.
     *
     * @param { number } index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Invoked when data in the position indicated by the specified index is changed.
     *
     * @param { number } index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onDataChange(index: number): void;
    /**
     * Invoked when data is processed in batches to notify the component of refreshing.
     *
     * @param { DataOperation[] } dataOperations
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onDatasetChange(dataOperations: DataOperation[]): void;
}
/**
 * Developers need to implement this interface to provide data to LazyForEach component.
 *
 * @interface IDataSource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Developers need to implement this interface to provide data to LazyForEach component.
 *
 * @interface IDataSource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Developers need to implement this interface to provide data to LazyForEach component.
 *
 * @interface IDataSource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface IDataSource {
    /**
     * Obtains the total number of data items.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Obtains the total number of data items.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the total number of data items.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    totalCount(): number;
    /**
     * Obtains the data item that matches the specified index.
     *
     * @param { number } index
     * @returns { any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Obtains the data item that matches the specified index.
     *
     * @param { number } index
     * @returns { any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the data item that matches the specified index.
     *
     * @param { number } index
     * @returns { any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getData(index: number): any;
    /**
     * Registers a listener for data changes.
     *
     * @param { DataChangeListener } listener
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Registers a listener for data changes.
     *
     * @param { DataChangeListener } listener
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Registers a listener for data changes.
     *
     * @param { DataChangeListener } listener
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    registerDataChangeListener(listener: DataChangeListener): void;
    /**
     * Unregisters the listener for data changes.
     *
     * @param { DataChangeListener } listener
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Unregisters the listener for data changes.
     *
     * @param { DataChangeListener } listener
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Unregisters the listener for data changes.
     *
     * @param { DataChangeListener } listener
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    unregisterDataChangeListener(listener: DataChangeListener): void;
}
/**
 * declare ForEachAttribute
 *
 * @extends DynamicNode<LazyForEachAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class LazyForEachAttribute extends DynamicNode<LazyForEachAttribute> {
}
/**
 * Lazy loading.
 *
 * @interface LazyForEachInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Lazy loading.
 *
 * @interface LazyForEachInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Lazy loading.
 *
 * @interface LazyForEachInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface LazyForEachInterface {
    /**
     * Enter the value to obtain the LazyForEach.
     *
     * @param { IDataSource } dataSource
     * @param { function } itemGenerator
     * @param { function } keyGenerator
     * @returns { LazyForEachInterface }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Enter the value to obtain the LazyForEach.
     *
     * @param { IDataSource } dataSource
     * @param { function } itemGenerator
     * @param { function } keyGenerator
     * @returns { LazyForEachInterface }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Enter the value to obtain the LazyForEach.
     *
     * @param { IDataSource } dataSource
     * @param { function } itemGenerator
     * @param { function } keyGenerator
     * @returns { LazyForEachInterface }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Enter the value to obtain the LazyForEach.
     *
     * @param { IDataSource } dataSource
     * @param { function } itemGenerator
     * @param { function } keyGenerator
     * @returns { LazyForEachAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    (dataSource: IDataSource, itemGenerator: (item: any, index: number) => void, keyGenerator?: (item: any, index: number) => string): LazyForEachAttribute;
}
/**
 * Defines LazyForEach Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines LazyForEach Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines LazyForEach Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const LazyForEach: LazyForEachInterface;
