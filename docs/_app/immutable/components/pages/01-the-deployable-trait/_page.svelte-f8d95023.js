import{S as d,i as y,s as m,J as w,ad as p}from"../../../chunks/index-a89a8bfe.js";import{d as n,s as l}from"../../../chunks/store-04c80bb0.js";import{d as C}from"../../../chunks/index-e79fdc6e.js";import{g}from"../../../chunks/helpers-7ef692a6.js";const f="# The Deployable Trait\n\nTact doesn't support classical class inheritance, but contracts can implement *traits*. One of the commonly used traits is `Deployable`. It implements a simple receiver for the `Deploy` message which helps deploy contracts in a standard way.\n\nAll contracts are deployed by sending them a message. This can be any message, but best practice is to designate the special `Deploy` message for this purpose.\n\nThis message has a single field, `queryId`, which is provided by the deployer. If the deploy succeeds, the contract will reply with the message `DeployOk` and echo the same `queryId` in the response.\n\nIf you're using TypeScript to deploy, sending the deploy message should look like:\n\n```ts\nconst msg = { $$type: \"Deploy\", queryId: 0n };\n await contract.send(sender, { value: toNano(1) }, msg);\n```\n",B=`// this trait has to be imported
import "@stdlib/deploy";

// the Deployable trait adds a default receiver for the "Deploy" message
contract Counter with Deployable {
 
    val: Int as uint32;
 
    init() {
        self.val = 0;
    }
 
    receive("increment") {
        self.val = self.val + 1;
    }
 
    get fun value(): Int {
        return self.val;
    }
}`;function I(o){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(o.queryId,64)}}async function u(){const o=n.Cell.fromBase64("te6ccgECCwEAAlsAART/APSkE/S88sgLAQIBYgIDAt7QAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJIkFVbwT4Ye1E0NQB+GLSAAGU0x8BMY6OMPgo1wsKgwm68uCJ2zziWds8MMj4QgHMfwHKAAEByx/J7VQKBAIBWAgJAfDtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAI4r+QGC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupSkf9sx4JEw4nAFASb4QW8kECNfA39wUAOAQgFtbds8BgHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAcAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSAFFuawO1E0NQB+GLSAAGU0x8BMY6OMPgo1wsKgwm68uCJ2zzigKAAJw"),e=n.Cell.fromBase64("te6cckECDQEAAmUAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIHBAIBWAYFAUW5rA7UTQ1AH4YtIAAZTTHwExjo4w+CjXCwqDCbry4InbPOKAwAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSALe0AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiSJBVW8E+GHtRNDUAfhi0gABlNMfATGOjjD4KNcLCoMJuvLgids84lnbPDDI+EIBzH8BygABAcsfye1UDAgB8O2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6jMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8nbPH/gAcAAjiv5AYLwxPjXIxLt/e9be+x4M727Fi0VEb14qRKu0PJjevZVcq66lKR/2zHgkTDicAkBJvhBbyQQI18Df3BQA4BCAW1t2zwKAc7IcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJzxZQA/oCcAHKaCNusyVus7GXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsACwCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAACcNjsCho=");let t=n.beginCell();t.storeRef(e),t.storeUint(0,1);const a=t.endCell();return{code:o,data:a}}const h={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class c{constructor(e,t){this.abi={errors:h},this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=n.contractAddress(0,e);return new c(t,e)}static fromAddress(e){return new c(e)}async send(e,t,a,s){let r=null;if(s==="increment"&&(r=n.beginCell().storeUint(0,32).storeStringTail(s).endCell()),s&&typeof s=="object"&&!(s instanceof n.Slice)&&s.$$type==="Deploy"&&(r=n.beginCell().store(I(s)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(t,{...a,body:r})}async getValue(e){let t=new n.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}}function b(o,e,t){let a;w(o,l,i=>t(2,a=i));let s,r;return p(l,a={markdown:f,tactCode:B,deploy:async()=>{const i=await C.Blockchain.create(),A=await i.treasury("deployer");return s=A.getSender(),r=i.openContract(await c.fromInit()),[await r.send(A.getSender(),{value:n.toNano(1)},{$$type:"Deploy",queryId:0n})]},messages:{increment:async()=>[await r.send(s,{value:n.toNano(1)},"increment")]},getters:{value:async()=>await r.getValue()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},a),[]}class x extends d{constructor(e){super(),y(this,e,b,null,m,{})}}export{x as default};
